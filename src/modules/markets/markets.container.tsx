import React from 'react';

import './markets.container.scss';

import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { getAssetMarkets } from '../../services/queries/GetAssetMarket';
import Box from '../../shared/components/box/Box';
import { IMarket } from '../../shared/interfaces/IMarket';

function MarketsContainer(): JSX.Element  {
  const { name } = useParams();

  const { loading, data } = useQuery(getAssetMarkets, {
    variables: 
    { 
      name 
    },
  });

  return (
    <div className="app-container">
    <div className="markets-container">
      <div className="markets-container__header">
        <div className="markets-container__header__title">Cryptocurrency Markets for {name}</div>
      </div>
      <div className="markets-container__body">
        {loading ? (
          <p>Loading...</p>
        ) : (
          data.assets &&
          data.assets[0] &&
          data.assets[0].markets.map((market: IMarket) => <Box key={market.id} market={market} />)
        )}
      </div>
    </div>
    </div>
  );
};

export default MarketsContainer;

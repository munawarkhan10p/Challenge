import React from 'react';

import { currencyFormatter } from '../../helpers/Formatter';

import { weightedAveragePrice } from '../../helpers/weightedAveragePrice';
import { useHistory } from 'react-router-dom';

import './coin-summary.scss';
import { IAsset } from '../../interfaces/IAsset';

interface ICoinSummaryProps {
  asset: IAsset;
}


function CoinSummary({ asset: { id, name, symbol, marketCap, markets }} : ICoinSummaryProps ): JSX.Element {
  const history = useHistory();

  return (
    <div className="asset-summary-container" key={id} onClick={() => history.push(`/markets/${name}`)}>
      <div className="name" title={name}>
        <div className="label">Name:</div>
        {name}
      </div>
      <div className="pair">
        <div className="label">Pair:</div>
        {`${symbol}/USD`}
      </div>
      <div className="market-cap">
        <div className="label">Market Cap:</div>
        {currencyFormatter(marketCap)}
      </div>
      <div className="average-last-price">
        <div className="label">Average Last Price:</div>
        {currencyFormatter(weightedAveragePrice(markets))}
      </div>
    </div>
  );
};

export default CoinSummary;

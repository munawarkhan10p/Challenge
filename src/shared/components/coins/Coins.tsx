import React from 'react';

import CoinSummary from '../coin-summary/CoinSummary';

import './coins.scss';
import { IAsset } from '../../interfaces/IAsset';

export interface CoinsProps {
  list: IAsset[];
}

function Coins(props: CoinsProps): JSX.Element {
  return (
    <div className="coins">
      <div className="header">
        <div className="name">Name</div>
        <div className="pair">Pair</div>
        <div className="market-cap">Market Cap</div>
        <div className="average-last-price">Average Last Price</div>
      </div>
      <div className="summary">
        {props.list.map((asset) => (
          <CoinSummary asset={asset} key={asset.id} />
        ))}
      </div>
    </div>
  );
};

export default Coins;

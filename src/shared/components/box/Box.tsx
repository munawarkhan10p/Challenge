import React from 'react';

import Row from '../row/Row';
import General, { Currenttype } from '../general/General';

import './box.scss';
import { IMarket } from '../../interfaces/IMarket';

interface IBoxProps {
  market: IMarket;
}

function Box({ market }: IBoxProps): JSX.Element {
  const percentChange = parseFloat(market.ticker?.percentChange as string) > 0 ? 'increase' : 'decrease';

  return (
    <div className="market-card-container">
      <div className="market-exchange">{market.exchangeSymbol}</div>
      <div className="market-analytics-container">
        <Row value={`${market.baseSymbol}/${market.quoteSymbol}`} label="Pair" />
        <Row value={market.marketType as string} label="Type" />
      </div>
      {market.ticker && <General type={Currenttype.SPACE} />}
      {market.ticker && (
        <div className="market-analytics-container">
          <Row numeric currency={market.quoteSymbol} value={market.ticker?.lastPrice} label="Last Price" />
          <Row
            numeric
            percentChange={percentChange}
            value={market.ticker?.percentChange as string}
            label="24 h Change"
          />
          <Row numeric currency={market.quoteSymbol} value={market.ticker?.lowPrice} label="24 h Low" />
          <Row numeric currency={market.quoteSymbol} value={market.ticker?.highPrice} label="24 h Hight" />
        </div>
      )}
      {!market.ticker && <General type={Currenttype.NOTE} /> }
    </div>
  );
};

export default Box;

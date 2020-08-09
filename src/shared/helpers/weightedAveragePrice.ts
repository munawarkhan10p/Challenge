import { IMarket } from '../interfaces/IMarket';

//  Copy from Net
export const weightedAveragePrice = (markets: IMarket[]) => {
  let marketsHavingTicker = markets.filter(({ ticker }) => !!ticker);

  const totalBaseVolume = marketsHavingTicker.reduce((acc, { ticker }) => {
    let tickerBaseVolume = parseFloat(ticker?.baseVolume as string) || 0;
    return acc + tickerBaseVolume;
  }, 0);

  return marketsHavingTicker.reduce((acc, { ticker }) => {
    const averagePrice = ticker ? (parseFloat(ticker.lowPrice) + parseFloat(ticker.highPrice)) / 2 : 0;

    return acc + averagePrice * (parseFloat(ticker?.baseVolume as string) / totalBaseVolume) * 100;
  }, 0);
};

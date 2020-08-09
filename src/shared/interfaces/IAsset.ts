import { IMarket } from './IMarket';

export interface IAsset {
  id: string;
  name: string;
  pair: string;
  symbol: string;
  marketCap: number;
  markets: IMarket[];
  averageLastPrice: number;
}

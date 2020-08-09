import { ITicker } from './ITicker';

export interface IMarket {
  id?: string;
  marketType?: string;
  exchangeSymbol?: string;
  marketSymbol?: string;
  baseSymbol?: string;
  quoteSymbol?: string;
  ticker?: ITicker;
}

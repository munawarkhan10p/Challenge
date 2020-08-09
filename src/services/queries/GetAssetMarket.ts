import { gql } from '@apollo/client';

export const getAssetMarkets = gql`
  query GetAssetMarket($name: String!) {
    assets(
      filter: 
      { 
        assetName: 
        { 
          _eq: $name 
        } 
      }, 
      page: 
      { 
        limit: 1 }
        ) 
        {
      assetName
      markets {
        id
        marketType
        exchangeSymbol
        baseSymbol
        quoteSymbol
        ticker {
          percentChange
          highPrice
          lowPrice
          lastPrice
        }
      }
    }
  }
`;

import { gql } from '@apollo/client';

export const getAssets = gql`
  query GetAssets($name: String!, $limit: Int!) {
    assets(
      sort: [
        { 
          marketCapRank: ASC 
        }
      ], 
      filter: { 
        assetName: { _like: $name } 
      }, 
      page: 
      { 
        limit: $limit 
      })
       {
      id
      name: assetName
      symbol: assetSymbol
      marketCap
      markets(
        filter: { 
          quoteSymbol: { _eq: "USD" } }) 
          {
        ticker {
          baseVolume
          lastPrice
          highPrice
          lowPrice
        }
      }
    }
  }
`;

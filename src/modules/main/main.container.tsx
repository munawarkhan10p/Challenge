import React, { useState } from 'react';
import { useQuery } from '@apollo/client';

import Coins from '../../shared/components/coins/Coins';
import { getAssets } from '../../services/queries/GetAssets';
import Search from '../../shared/components/search/Search';

import './main.container.scss';

function MainContainer(): JSX.Element {
  const [searchString, setSearchString] = useState<string>('');
  const [limit, setLimit] = useState<number>(25);
  const limits = [25, 50, 75];
  let debounce: NodeJS.Timeout | null = null;

  const { loading, data } = useQuery(getAssets, {
    variables: {
      limit,
      name: `%${searchString}%`,
    },
  });

  const onChange = (value: string) => {
    if (debounce) clearTimeout(debounce);

    debounce = setTimeout(function () {
      setSearchString(value);
    }, 3000);
  };

  return (
    <div className="app-container">
    <div className="main-container">
      <div className="header">
        <div className="main-container__header__title">Top 100 Cryptocurrencies by Market Capitalization</div>
        <div className="main-container__header__search">
          <Search onChange={onChange} />
        </div>
      </div>
      <div className="main-container__body">
        {loading ? <p>Loading...</p> : <Coins list={data.assets} />}</div>
      <div className="main-container__limits">
        {limits.map((_value) => (
          <div
            key={_value}
            onClick={() => setLimit(_value)}
            className={`limit-value ${limit === _value ? 'active' : ''}`}
          >
            {_value}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default MainContainer;

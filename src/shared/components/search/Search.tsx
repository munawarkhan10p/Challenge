import './search.scss';

import React from 'react';

interface ISearchProps {
  onChange: (searchString: string) => void;
}

function Search({ onChange }: ISearchProps): JSX.Element {
  return (
    <div className="search-container">
      <input
        className="search"
        type="text"
        placeholder="Search cryptocurrency"
        onChange={(event) => {
          onChange(event.target.value);
        }}
      />
    </div>
  );
};

export default Search;

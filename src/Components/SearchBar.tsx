

import React, { useState } from 'react';
import '../styles/SearchBar.scss';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className= 'searchBar'>
      <div className='search'>
      <input
        type="text"
        placeholder="Search by Title"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      </div>
      <div>
      <button onClick={handleSearch}>Search</button>
      </div>
      
    </div>
  );
};

export default SearchBar;
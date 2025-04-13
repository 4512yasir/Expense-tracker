import React from 'react';

function SearchBar({ onSearchChange }) {
  return (
    <div className="search-bar-wrapper">
      <input
        type="text"
        placeholder="Search expenses..."
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;

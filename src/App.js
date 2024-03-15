// SearchComponent.jsx
import React from 'react';

const SearchComponent = ({ onSearch }) => {
  return (
    <div>
      <label htmlFor="search-input">Search:</label>
      <input
        type="text"
        id="search-input"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchComponent;

// ListComponent.jsx
import React from 'react';

const ListComponent = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default ListComponent;

// App.jsx (Main Component)
import React, { useState } from 'react';
import SearchComponent from './SearchComponent';
import ListComponent from './ListComponent';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const allItems = ["Item 1", "Item 2", "Item 3", "Item 4"]; // Add more items as needed

  const filteredItems = allItems.filter(item =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <SearchComponent onSearch={setSearchQuery} />
      <ListComponent items={filteredItems} />
    </div>
  );
};

export default App;
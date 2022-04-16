import { useState, useRef } from 'react';
import logo from './logo.svg';
import './App.css';

const fetchData = () => {
  const data = require('./data/data.json');

  return data['bitsAndPieces'];
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const data = useRef(fetchData());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="App">
      <header>
        <h1>???</h1>
        <h2>Bits and pieces ideas for cryptic crossword setters</h2>
      </header>
      <main>
        <input aria-label="search-box" value={searchTerm} onChange={handleChange} />
        {searchTerm === '' && <p>Search for something!</p>}
      </main>
    </div>
  );
}

export default App;

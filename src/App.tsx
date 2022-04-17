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

  const searchResults = () => {
    const results = data.current.filter((e: any) => e['str'] === searchTerm);

    return (
      <ul>
        {results.map((r: any, id: any) => <li key={id}>{r['clue']}</li>)}
      </ul>
    )
  };

  return (
    <div className="App">
      <header>
        <h1>Crossword Bits</h1>
        <h2>Bits and pieces ideas for cryptic crossword setters</h2>
      </header>
      <main>
        <>
          <input aria-label="search-box" value={searchTerm} onChange={handleChange} />
          {searchTerm === '' && <p>Search for something!</p>}
          {searchTerm !== '' && searchResults()}
        </>
      </main>
    </div>
  );
}

export default App;

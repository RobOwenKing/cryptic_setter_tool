import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

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
      </main>
    </div>
  );
}

export default App;

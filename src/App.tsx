import Movies from './pages/movies.page';
import { getData } from './utils/getData';
import { useEffect, useState, createContext } from 'react';

function App() {
  return (
    <div>
      <Movies />
    </div>
  );
}

export default App;

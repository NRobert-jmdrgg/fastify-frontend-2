import Movie from './pages/movie.page';
import Movies from './pages/movies.page';
import Theaters from './pages/theaters.page';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import getData from './utils/getData';
import TopBar from './components/top-bar.component';
import MoviePagination from './components/pagination.component';

function App() {
  return (
    <>
      <TopBar />
      <Router>
        <Routes>
          <Route path='/' element={<Navigate replace to={'/page/1'} />} />
          <Route path='/page/:num' element={<Movies />} />
          <Route path='/theaters' element={<Theaters />} />
          <Route path='/movie/:movieId' element={<Movie />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

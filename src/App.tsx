import Movie from './pages/movie.page';
import Movies from './pages/movies.page';
import Theaters from './pages/theaters.page';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import getData from './utils/getData';
import TopBar from './components/top-bar.component';

export type MovieProps = {
  _id: string;
  runtime: number;
  poster: string;
  title: string;
  year: number;
};

function App() {
  const [movieList, setMovieList] = useState<MovieProps[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await getData<MovieProps[]>(
        'http://localhost:3002/api/movies/12'
      );
      setMovieList(movies);
    };
    fetchMovies();
  }, []);

  return (
    <>
      <TopBar />
      <Router>
        <Routes>
          <Route path='/' element={<Movies movieList={movieList} />} />
          <Route path='/theaters' element={<Theaters />} />
          <Route path='/movie/:movieId' element={<Movie />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

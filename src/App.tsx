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
  const maxItems = 15;

  const [movieList, setMovieList] = useState<MovieProps[]>([]);
  const [movieCount, setMovieCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const movies = await getData<MovieProps[]>(
        'http://localhost:3002/api/movies/display/0/15'
      );
      const count = await getData<number>(
        'http://localhost:3002/api/movies/count'
      );

      setMovieList(movies);
      setMovieCount(count);
    };
    fetchData();
  }, []);

  return (
    <>
      <TopBar />
      <Router>
        <Routes>
          <Route
            path='/'
            element={
              <Movies
                movieList={movieList}
                count={Math.ceil(movieCount / maxItems)}
              />
            }
          />
          <Route path='/theaters' element={<Theaters />} />
          <Route path='/movie/:movieId' element={<Movie />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

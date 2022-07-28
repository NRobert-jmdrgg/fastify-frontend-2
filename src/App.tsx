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
  const [pageNumber, setPageNumber] = useState(1);
  const [lowerBound, setLowerBound] = useState(0);

  const calculatePageNumbers = (pageNumber: number) => {
    setLowerBound(0 + 16 * (pageNumber - 1));
  };

  useEffect(() => {
    const fetchCount = async () => {
      const count = await getData<number>(
        'http://localhost:3002/api/movies/count'
      );
      setMovieCount(count);
    };
    fetchCount();
  }, []);

  useEffect(() => {
    calculatePageNumbers(pageNumber);
  }, [pageNumber]);

  useEffect(() => {
    const fetchData = async () => {
      const movies = await getData<MovieProps[]>(
        `http://localhost:3002/api/movies/display/${lowerBound}`
      );

      setMovieList(movies);
    };
    fetchData();
  }, [lowerBound]);

  return (
    <>
      <TopBar />
      <Router>
        <Routes>
          <Route
            path='/'
            element={<Navigate replace to={`/page/${pageNumber}`} />}
          />
          <Route
            path='/page/:pageNumber'
            element={
              <Movies
                movieList={movieList}
                Pagination={
                  <MoviePagination
                    count={Math.ceil(movieCount / maxItems)}
                    setPageNumber={setPageNumber}
                  />
                }
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

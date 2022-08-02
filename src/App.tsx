import Movie from './pages/movie.page';
import Movies from './pages/movies.page';
import Theaters from './pages/theaters.page';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import TopBar from './components/top-bar.component';
import SearchDialog from './components/search-dialog.component';
import { useContext } from 'react';
import { SearchContext } from './contexts/search.context';

function App() {
  const { open } = useContext(SearchContext);

  return (
    <>
      <Router>
        <TopBar />
        {open && <SearchDialog />}
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

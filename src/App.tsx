import Movies from './pages/movies.page';
import Theaters from './pages/theaters.page';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/top-bar.component';

function App() {
  return (
    <>
      <TopBar />
      <Router>
        <Routes>
          <Route path='/' element={<Movies />} />
          <Route path='/theaters' element={<Theaters />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

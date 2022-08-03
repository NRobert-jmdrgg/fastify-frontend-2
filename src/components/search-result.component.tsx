import { Paper } from '@mui/material';
import { MovieProps } from '../pages/movies.page';
import fixBrokenImageLink from '../utils/fixBrokenImageLink';
import { SyntheticEvent, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../contexts/search.context';
import './styles/search-result.styles.scss';

type ResultProps = {
  movie: MovieProps;
};

const Result = ({ movie }: ResultProps) => {
  const { setOpen } = useContext(SearchContext);
  let navigate = useNavigate();

  const routeChange = () => {
    let path = '../movie/' + movie._id;
    navigate(path);
    setOpen(false);
  };

  return (
    <Paper variant='outlined' onClick={routeChange} sx={{ cursor: 'pointer' }}>
      <img
        className='result-image-poster'
        src={
          movie.poster ||
          'https://image.shutterstock.com/image-vector/picture-vector-icon-no-image-260nw-1732584296.jpg'
        }
        alt={movie.title}
        onError={(e: SyntheticEvent<HTMLImageElement, Event>) =>
          fixBrokenImageLink(e)
        }
      />
      <h1>{movie.title}</h1>
      <p>{movie.year}</p>
      <p>{movie.runtime}</p>
    </Paper>
  );
};

export default Result;

import {
  Grid,
  Paper,
  Typography,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './styles/movie-card.styles.scss';
import fixBrokenImageLink from '../utils/fixBrokenImageLink';
import { SyntheticEvent } from 'react';

type movieProps = {
  props: {
    id: string;
    poster?: string;

    title: string;
    year: number;
    runtime: number;
  };
};

const titleTheme = createTheme({
  typography: {
    body1: {
      fontSize: '1rem',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      maxWidth: 162,
    },
  },
});

const infoTheme = createTheme({
  typography: {
    body2: {
      fontSize: '0.8rem',
    },
  },
});

const MovieCard = ({ props }: movieProps) => {
  let navigate = useNavigate();

  const routeChange = () => {
    let path = '../movie/' + props.id;
    navigate(path);
  };

  return (
    <Grid item xs='auto' onClick={routeChange}>
      <Paper elevation={3} sx={{ cursor: 'pointer' }}>
        <img
          className='movie-poster'
          src={
            props.poster ||
            'https://image.shutterstock.com/image-vector/picture-vector-icon-no-image-260nw-1732584296.jpg'
          }
          alt={props.title}
          onError={(e: SyntheticEvent<HTMLImageElement, Event>) =>
            fixBrokenImageLink(e)
          }
        />
        <ThemeProvider theme={titleTheme}>
          <Typography variant='body1' component='h4' marginX={2}>
            {props.title}
          </Typography>
        </ThemeProvider>
        <ThemeProvider theme={infoTheme}>
          <Typography variant='body2' component='h4' marginX={2}>
            ({props.year}) - {props.runtime} minutes
          </Typography>
        </ThemeProvider>
      </Paper>
    </Grid>
  );
};

export default MovieCard;

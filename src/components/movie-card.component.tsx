import {
  Grid,
  Paper,
  Typography,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './styles/movie-card.styles.scss';

type movieProps = {
  props: {
    id: string;
    poster: string;
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
    let path = 'movie/' + props.id;
    navigate(path);
  };

  return (
    <Grid item xs='auto' onClick={routeChange}>
      <Paper elevation={3}>
        <img
          className='movie-poster'
          src={
            props.poster ||
            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Black_colour.jpg/220px-Black_colour.jpg'
          }
          alt={props.title}
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

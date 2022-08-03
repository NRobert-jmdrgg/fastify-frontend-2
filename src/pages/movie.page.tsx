import { Container, Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import fixBrokenImageLink from '../utils/fixBrokenImageLink';
import { useState, useEffect, SyntheticEvent } from 'react';
import './styles/movie.styles.scss';
import IMDBRating from '../components/rating.component';
import axios from 'axios';

type MovieDetails = {
  awards: {
    nominations: number;
    text: string;
    wins: number;
  };
  cast: string[];
  countries: string[];
  directors: string[];
  fullplot?: string;
  genres: string[];
  imdb: {
    id: number;
    rating: number;
    votes: number;
  };
  languages?: string[];
  lastupdated: string;
  metacritic?: number;
  num_mflix_comments: number;
  plot?: string;
  poster?: string;
  rated?: string;
  released?: Date;
  runtime?: number;
  title: string;
  tomatoes?: {
    boxOffice?: string;
    consensus?: string;
    critic?: {
      meter?: number;
      numReviews: number;
      rating?: number;
    };
    dvd?: Date;
    fresh?: number;
    lastUpdated: Date;
    production?: string;
    rotten?: number;
    viewer?: {
      meter?: number;
      numReviews: number;
      rating: number;
    };
    website?: string;
  };
  type: string;
  writers: string[];
  year?: number;
};

const defaultValues = {
  awards: {
    nominations: 0,
    text: '',
    wins: 0,
  },
  cast: [],
  countries: [],
  directors: [],
  genres: [],
  imdb: {
    id: 0,
    rating: 0,
    votes: 0,
  },
  lastupdated: '',
  num_mflix_comments: 0,
  title: '',
  type: '',
  writers: [],
};

const Movie = () => {
  let { movieId } = useParams();
  const [movie, setMovie] = useState<MovieDetails>(defaultValues);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await axios.get<MovieDetails>(
        `http://localhost:3002/api/movie/${movieId}`
      );

      setMovie(response.data);
    };
    fetchMovie();
  }, [movieId]);

  return (
    <Container sx={{ display: 'flex' }}>
      <Box>
        <img
          className='movie-poster-image'
          src={
            movie.poster ||
            'https://image.shutterstock.com/image-vector/picture-vector-icon-no-image-260nw-1732584296.jpg'
          }
          alt={movie.title}
          onError={(e: SyntheticEvent<HTMLImageElement, Event>) =>
            fixBrokenImageLink(e)
          }
        />
        <Typography variant='body2' component='p' textAlign='center'>
          {movie.year} - {movie.runtime} minutes
        </Typography>
      </Box>
      <Box sx={{ marginTop: 2 }}>
        <Typography variant='h2' component='h1'>
          {movie.title}
        </Typography>
        <Typography variant='body2' component='p'>
          Rated: {movie.rated} Genres: {movie.genres.join(', ')} Languages:{' '}
          {movie.languages?.join(', ')}
        </Typography>
        <Typography variant='body2' component='p'>
          Directors: {movie.directors.join(', ')}
        </Typography>
        <Typography variant='h6' component='p'>
          {movie.plot}
        </Typography>
        <Typography variant='body1' component='p'>
          Awards: {movie.awards.text}
        </Typography>
        <Typography variant='body1' component='p'>
          IMDB Rating: {movie.imdb.rating} Votes: {movie.imdb.votes}
        </Typography>
        <IMDBRating rating={movie.imdb.rating} />
        <Typography variant='body1' component='p'>
          {movie.metacritic !== undefined
            ? `metacritic score: ${movie.metacritic}`
            : ''}
        </Typography>
        <Typography variant='body1' component='p'>
          {movie.fullplot}
        </Typography>
      </Box>
    </Container>
  );
};

export default Movie;

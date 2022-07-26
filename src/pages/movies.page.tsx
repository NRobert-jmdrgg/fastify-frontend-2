import { Container, Grid, Box } from '@mui/material';
import MovieCard from '../components/movie-card.component';
import { getData } from '../utils/getData';
import { useState, useEffect } from 'react';
import MoviePagination from '../components/pagination.component';

export type MovieProps = {
  _id: string;
  plot: string;
  genres: string[];
  runtime: number;
  cast: string[];
  num_mflix_comments: number;
  poster: string;
  title: string;
  fullplot: string;
  countries: string[];
  released: Date;
  directors: string[];
  rated: string;
  awards: {
    wins: number;
    nominations: number;
    text: string;
  };
  lastUpdated: Date;
  year: number;
  imdb: {
    rating: number;
    votes: number;
    id: number;
  };
  type: string;
  tomatoes: {
    viewer: {
      rating: number;
      numReviews: number;
      meter: number;
    };
    lastUpdated: Date;
  };
};

const Movies = () => {
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
      <Container
        fixed
        sx={{
          marginBottom: 5,
        }}
      >
        <Grid container spacing={3} marginTop={2}>
          {movieList.map((movie) => {
            return (
              <MovieCard
                props={{
                  id: movie._id,
                  poster: movie.poster,
                  title: movie.title,
                  year: movie.year,
                  runtime: movie.runtime,
                }}
              />
            );
          })}
        </Grid>
      </Container>

      <Box
        sx={{
          justifyContent: 'center',
          display: 'flex',
          marginBottom: 3,
        }}
      >
        <MoviePagination />
      </Box>
    </>
  );
};

export default Movies;

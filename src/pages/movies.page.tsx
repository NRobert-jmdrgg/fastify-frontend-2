import { Container, Grid, Box } from '@mui/material';
import MovieCard from '../components/movie-card.component';
import { MovieProps } from '../App';
import { ReactNode } from 'react';

type MovieListProps = {
  movieList: MovieProps[];

  Pagination: ReactNode;
};

const Movies = ({ movieList, Pagination }: MovieListProps) => {
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
                key={movie._id}
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
        {Pagination}
      </Box>
    </>
  );
};

export default Movies;

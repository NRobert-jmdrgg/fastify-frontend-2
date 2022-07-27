import { Container, Grid, Box } from '@mui/material';
import MovieCard from '../components/movie-card.component';
import MoviePagination from '../components/pagination.component';
import { MovieProps } from '../App';

type MovieListProps = {
  movieList: MovieProps[];
  count: number;
};

const Movies = ({ movieList, count }: MovieListProps) => {
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
        <MoviePagination count={count} />
      </Box>
    </>
  );
};

export default Movies;

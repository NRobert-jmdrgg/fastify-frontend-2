import { Container, Grid, Box } from '@mui/material';
import MovieCard from '../components/movie-card.component';
import MoviePagination from '../components/pagination.component';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import getData from '../utils/getData';

type MovieProps = {
  _id: string;
  runtime: number;
  poster: string;
  title: string;
  year: number;
};

const Movies = () => {
  const maxItemsDisplayed = 15;
  let { num } = useParams();

  let navigate = useNavigate();
  const [movieList, setMovieList] = useState<MovieProps[]>([]);
  const [movieCount, setMovieCount] = useState(0);
  const [pageNumber, setPageNumber] = useState(Number(num));
  const [lowerBound, setLowerBound] = useState(0);

  const calculatePageNumbers = (pageNumber: number) => {
    setLowerBound(maxItemsDisplayed * (pageNumber - 1));
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

  const setPage = (n: number) => {
    setPageNumber(n);
    navigate(`/page/${n}`);
  };

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
        <MoviePagination
          count={Math.ceil(movieCount / maxItemsDisplayed)}
          setPage={setPage}
        />
      </Box>
    </>
  );
};

export default Movies;

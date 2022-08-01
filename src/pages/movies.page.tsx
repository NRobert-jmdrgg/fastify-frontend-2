import { Container, Grid, Box } from '@mui/material';
import MovieCard from '../components/movie-card.component';
import MoviePagination from '../components/pagination.component';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

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
  const [lowerBound, setLowerBound] = useState(Number(num));

  const calculatePageNumbers = (pageNumber: number) => {
    setLowerBound(maxItemsDisplayed * (pageNumber - 1));
  };

  useEffect(() => {
    const fetchCount = async () => {
      const response = await axios.get<number>(
        'http://localhost:3002/api/movies/count'
      );
      setMovieCount(response.data);
    };
    fetchCount();
  }, []);

  useEffect(() => {
    calculatePageNumbers(pageNumber);
  }, [pageNumber]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get<MovieProps[]>(
        `http://localhost:3002/api/movies/display/${lowerBound}`
      );

      setMovieList(response.data);
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
          pageNumber={pageNumber}
          count={Math.ceil(movieCount / maxItemsDisplayed)}
          setPage={setPage}
        />
      </Box>
    </>
  );
};

export default Movies;

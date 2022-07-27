import getData from '../utils/getData';
import { useState, useEffect } from 'react';
import { Container, Box, Typography } from '@mui/material';
import {
  CitySelector,
  StateSelector,
  StreetSelector,
} from '../components/theater-selector.component';
import Map from '../components/map.component';
import SearchButton from '../components/button.component';

type Theater = {
  theaterId: number;
  location: {
    address: {
      street1: string;
      city: string;
      state: string;
      zipcode: string;
    };
    geo: {
      type: string;
      coordinates: number[];
    };
  };
};

const Theaters = () => {
  const [theaters, setTheaters] = useState<Theater[]>([]);
  useEffect(() => {
    const fetchTheaters = async () => {
      const newTheaters = await getData<Theater[]>(
        'http://localhost:3002/api/theaters/all'
      );
      setTheaters(newTheaters);
    };
    fetchTheaters();
  }, []);

  return (
    <>
      <Container sx={{ marginTop: 5 }}>
        <Box
          sx={{
            display: 'flex',
            width: 1200,
            height: 500,
          }}
        >
          <Box>
            <StateSelector
              labels={theaters.map((theater) => theater.location.address.state)}
            />
            <CitySelector
              labels={theaters.map((theater) => theater.location.address.city)}
            />
            <StreetSelector
              labels={theaters.map(
                (theater) => theater.location.address.street1
              )}
            />
            <SearchButton />
          </Box>
          <Map />
        </Box>
      </Container>
    </>
  );
};

export default Theaters;

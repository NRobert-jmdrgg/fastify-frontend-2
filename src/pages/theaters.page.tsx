import { getData } from '../utils/getData';
import { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import {
  CitySelector,
  StateSelector,
  StreetSelector,
} from '../components/theater-selector.component';
import Map from '../components/map.component';

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
      <Container>
        <StateSelector
          labels={theaters.map((theater) => theater.location.address.state)}
        />
        <CitySelector
          labels={theaters.map((theater) => theater.location.address.city)}
        />
        <StreetSelector
          labels={theaters.map((theater) => theater.location.address.street1)}
        />
      </Container>
      <Map />
    </>
  );
};

export default Theaters;

import { useState, useEffect } from 'react';
import { Container, Box } from '@mui/material';
import Selector from '../components/theater-selector.component';
import Map from '../components/map.component';
import axios from 'axios';

type Geo = {
  _id: number;
  coordinates: number[];
};

const Theaters = () => {
  const [stateList, setStateList] = useState<string[]>([]);
  const [cityList, setCityList] = useState<string[]>([]);
  const [streetList, setStreetList] = useState<string[]>([]);
  const [usState, setUsState] = useState<string | null>(null);
  const [city, setCity] = useState<string | null>(null);
  const [street, setStreet] = useState<string | null>(null);
  const [geolocation, setGeolocation] = useState<Geo[]>([]);

  useEffect(() => {
    const fetchStates = async () => {
      const response = await axios.get<string[]>(
        'http://localhost:3002/api/theaters/states'
      );
      setStateList(response.data);
    };
    fetchStates();
  }, []);

  useEffect(() => {
    const fetchCities = async () => {
      const response = await axios.get<string[]>(
        `http://localhost:3002/api/theaters/state/${usState}`
      );
      setCityList(response.data);
    };
    fetchCities();
  }, [usState]);

  useEffect(() => {
    const fetchStreets = async () => {
      const response = await axios.get<string[]>(
        `http://localhost:3002/api/theaters/city/${city}`
      );
      setStreetList(response.data);
    };
    fetchStreets();
  }, [city]);

  useEffect(() => {
    const fetchGeolocation = async () => {
      let url = `http://localhost:3002/api/theaters/geo/${usState}/`;
      if (city) url += `${city}/`;
      if (street) url += `${street}`;
      const response = await axios.get<Geo[]>(url);
      setGeolocation(response.data);
    };
    fetchGeolocation();
  }, [usState, city, street]);

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
            <Selector title='State' handler={setUsState} labels={stateList} />
            <Selector title='City' handler={setCity} labels={cityList} />
            <Selector title='Street' handler={setStreet} labels={streetList} />
          </Box>

          <Map />
        </Box>
      </Container>
    </>
  );
};

export default Theaters;

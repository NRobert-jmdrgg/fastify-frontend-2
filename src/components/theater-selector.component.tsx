import Box from '@mui/material/Box';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

type TheaterSelectorProps = {
  labels: string[];
};

export function CitySelector({ labels }: TheaterSelectorProps) {
  labels = [...new Set<string>(labels)];
  const [city, setCity] = useState<string | null>(labels[0]);
  return (
    <Autocomplete
      disablePortal
      id='combo-box-demo'
      options={labels}
      sx={{ width: 300, marginTop: 5 }}
      renderInput={(params) => <TextField {...params} label='city' />}
      onChange={(event: any, newValue: string | null) => {
        setCity(newValue);
      }}
    />
  );
}

export function StateSelector({ labels }: TheaterSelectorProps) {
  labels = [...new Set<string>(labels)];
  const [state, setState] = useState<string | null>(labels[0]);
  return (
    <Autocomplete
      disablePortal
      id='combo-box-demo'
      options={labels}
      sx={{ width: 300, marginTop: 5 }}
      renderInput={(params) => <TextField {...params} label='state' />}
      onChange={(event: any, newValue: string | null) => {
        setState(newValue);
      }}
    />
  );
}

export function StreetSelector({ labels }: TheaterSelectorProps) {
  labels = [...new Set<string>(labels)];
  const [street, setStreet] = useState<string | null>(labels[0]);
  return (
    <Autocomplete
      disablePortal
      id='combo-box-demo'
      options={labels}
      sx={{ width: 300, marginTop: 5 }}
      renderInput={(params) => <TextField {...params} label='street' />}
      onChange={(event: any, newValue: string | null) => {
        setStreet(newValue);
      }}
    />
  );
}

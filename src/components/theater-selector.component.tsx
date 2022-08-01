import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

type TheaterSelectorProps = {
  title: string;
  labels: string[];
  handler: (stete: string | null) => void;
};

export default function Selector({
  title,
  labels,
  handler,
}: TheaterSelectorProps) {
  const [value, setValue] = useState<string | null>(labels[0]);

  useEffect(() => handler(value), [value]);
  return (
    <Autocomplete
      disablePortal
      id='combo-box-demo'
      options={labels}
      sx={{ width: 300, marginTop: 5, marginX: 3 }}
      renderInput={(params) => <TextField {...params} label={title} />}
      onChange={(event: any, newValue: string | null) => {
        setValue(newValue);
      }}
    />
  );
}

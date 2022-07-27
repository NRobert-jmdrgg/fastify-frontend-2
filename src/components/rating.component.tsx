import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { useState, useEffect } from 'react';

type ImdbRatingProps = {
  rating: number;
};

export default function IMDBRating({ rating }: ImdbRatingProps) {
  const [value, setValue] = useState<number | null>(0);

  useEffect(() => setValue(rating), [rating]);

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Rating
        name='simple-controlled'
        value={value}
        precision={0.1}
        max={10}
        readOnly
      />
    </Box>
  );
}

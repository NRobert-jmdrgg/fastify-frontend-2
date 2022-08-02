import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import Result from './search-result.component';
import { MovieProps } from '../pages/movies.page';

type SearchResulsProps = {
  results: MovieProps[];
};

export default function SearchResults({ results }: SearchResulsProps) {
  return (
    <Box
      sx={{ width: '100%', paddingLeft: 5, paddingRight: 5, paddingBottom: 5 }}
    >
      <Stack spacing={2}>
        {results.map((result) => {
          return <Result key={result._id} />;
        })}
      </Stack>
    </Box>
  );
}

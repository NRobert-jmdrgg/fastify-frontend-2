import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import Result from './search-result.component';

export default function SearchResults() {
  return (
    <Box sx={{ width: '100%', padding: 5 }}>
      <Stack spacing={2}>
        <Result />
      </Stack>
    </Box>
  );
}

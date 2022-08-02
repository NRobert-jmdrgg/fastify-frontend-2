import Dialog from '@mui/material/Dialog';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useContext, useState } from 'react';
import { SearchContext } from '../contexts/search.context';
import TextField from '@mui/material/TextField';
import SearchResults from './search-results.component';
import { DialogContent } from '@mui/material';
import { MovieProps } from '../pages/movies.page';
import axios from 'axios';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function SearchDialog() {
  const { open, setOpen } = useContext(SearchContext);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [movieResults, setMovieResuts] = useState<MovieProps[]>([]);
  const handleClose = () => setOpen(false);

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        fullWidth={true}
        maxWidth='md'
        aria-labelledby='responsive-dialog-title'
      >
        <DialogContent>
          <Box sx={{ textAlign: 'center' }}>
            <TextField
              id='outlined-basic'
              label='Search Movies'
              variant='outlined'
              fullWidth={true}
              onChange={(
                event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
              ) => setSearchTerm(event.target.value)}
            />
            <Button
              variant='contained'
              sx={{ margin: 1 }}
              onClick={async () => {
                if (searchTerm) {
                  const response = await axios.get<MovieProps[]>(
                    `http://localhost:3002/api/movies/search/${searchTerm}`
                  );
                  setMovieResuts(response.data);
                }
              }}
            >
              Search
            </Button>
          </Box>

          <SearchResults results={movieResults} />
        </DialogContent>
      </Dialog>
    </div>
  );
}

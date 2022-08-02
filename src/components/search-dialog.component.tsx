import Dialog from '@mui/material/Dialog';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useContext } from 'react';
import { SearchContext } from '../contexts/search.context';
import TextField from '@mui/material/TextField';
import SearchResults from './search-results.component';
import { DialogContent } from '@mui/material';

export default function SearchDialog() {
  const { open, setOpen } = useContext(SearchContext);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClose = () => {
    setOpen(false);
  };

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
          <TextField
            id='outlined-basic'
            label='Search Movies'
            variant='outlined'
            sx={{ marginLeft: 5, marginRight: 5, marginTop: 5 }}
          />

          <SearchResults />
        </DialogContent>
      </Dialog>
    </div>
  );
}

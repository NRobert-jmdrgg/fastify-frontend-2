import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
import SearchIcon from '@mui/icons-material/Search';
import { useContext } from 'react';
import { SearchContext } from '../contexts/search.context';
import IconButton from '@mui/material/IconButton';

type MenuItem = {
  title: string;
  handler: () => void;
};

const ResponsiveAppBar = () => {
  let navigate = useNavigate();

  const menuItems: MenuItem[] = [
    { title: 'movies', handler: () => navigate('/page/1') },
    { title: 'theaters', handler: () => navigate('/theaters/') },
  ];

  const { setOpen } = useContext(SearchContext);

  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='/'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {menuItems.map((item) => (
              <Button
                key={item.title}
                onClick={item.handler}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {item.title}
              </Button>
            ))}
          </Box>
          <IconButton
            aria-label='search'
            color='inherit'
            onClick={() => setOpen(true)}
          >
            <SearchIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;

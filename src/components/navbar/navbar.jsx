import AppBar from '@mui/material/AppBar';
import { Outlet, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Filter from 'components/organisms/Filter';
import AddIcon from '@mui/icons-material/Add';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

export default function Navbar() {
  let navigate = useNavigate();
  return (
    <>
      <Box
        sx={{ flexGrow: 1 }}
        style={{
          position: 'fixed',
          zIndex: 1,
          top: '0',
          left: 0,
          width: '100%',
        }}
      >
        <AppBar position="static" style={{ height: '80px' }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => navigate('add')}
            >
              <AddIcon />
            </IconButton>
            {/* <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => navigate('/')}
            >
              <ArrowBackIcon />
            </IconButton> */}
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              onClick={() => navigate('/')}
            >
              Contacts
            </Typography>
            <Filter />
            <Button color="inherit" onClick={() => navigate('login')}>
              <LoginIcon />
            </Button>

            <Button color="inherit">
              <LogoutIcon />
            </Button>

            <Button color="inherit" onClick={() => navigate('register')}>
              <PersonAddAltIcon />
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />
    </>
  );
}

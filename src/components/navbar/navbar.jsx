import AppBar from '@mui/material/AppBar';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Filter from 'components/Filter/Filter';
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Navbar({ search, list, login, form }) {
  let navigate = useNavigate();
  return (
    <>
      <Box
        sx={{ flexGrow: 1 }}
        style={{
          position: 'fixed',
          zIndex: 1,
          top: '0',
          width: '100%',
        }}
      >
        <AppBar position="static" style={{ height: '80px' }}>
          <Toolbar>
            {search && (
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
            )}

            {form && (
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => navigate(-1)}
              >
                <ArrowBackIcon />
              </IconButton>
            )}

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Contacts
            </Typography>

            {list && <Filter />}

            {login ? (
              <Button color="inherit">
                <LoginIcon />
              </Button>
            ) : (
              <Button color="inherit">
                <LogoutIcon />
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

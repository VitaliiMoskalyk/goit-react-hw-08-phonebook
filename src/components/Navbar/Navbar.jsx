import AppBar from '@mui/material/AppBar';
import { Outlet, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Filter from 'components/Filter';
import AddIcon from '@mui/icons-material/Add';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import AppButton from 'components/buttons/AppButton';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from 'redux/auth/authOperations';

export default function Navbar() {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  let authSelector = useSelector(state => state.auth.isLoaded);
  let userName = useSelector(state => state.auth.user.name);
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
            {authSelector && (
              <AppButton onClick={() => navigate('add')}>
                <AddIcon />
              </AppButton>
            )}
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              onClick={() => navigate('/')}
            >
              Contacts
            </Typography>
            {authSelector && <Filter />}
            {!authSelector && (
              <AppButton onClick={() => navigate('login')}>
                <LoginIcon />
              </AppButton>
            )}
            {authSelector && (
              <>
                <AppButton onClick={() => dispatch(logout())}>
                  <LogoutIcon />
                </AppButton>
                <p>
                  Hello,
                  <br />
                  {userName} !
                </p>
              </>
            )}
            {!authSelector && (
              <AppButton onClick={() => navigate('register')}>
                <PersonAddAltIcon />
              </AppButton>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />
    </>
  );
}

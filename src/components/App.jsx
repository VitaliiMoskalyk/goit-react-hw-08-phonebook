import Navbar from './Navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getCurrentUser } from 'redux/auth/authOperations';
import Skeleton from '@mui/material/Skeleton';

const AddContactView = lazy(() =>
  import(
    'views/private/AddContactView' /* webpackChunkName: "AddContactView" */
  )
);
const RegisterView = lazy(() =>
  import('views/public/RegisterView' /* webpackChunkName: "RegisterView" */)
);
const LoginView = lazy(() =>
  import('views/public/LogInView' /* webpackChunkName: "LoginView" */)
);
const HomeView = lazy(() =>
  import('views/public/HomeView' /* webpackChunkName: "HomeView" */)
);

export const App = () => {
  const dispatch = useDispatch();
  const isrefreshing = useSelector(state => state.auth.isRefresh);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return isrefreshing ? (
    <Skeleton
      variant="rectangular"
      width={'100vw'}
      height={80}
      style={{ position: 'absolute', left: 0 }}
    />
  ) : (
    <>
      <Navbar />
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route index element={<HomeView />} />
          <Route path="add" element={<AddContactView />} />

          <Route path="register" element={<RegisterView />} />
          <Route path="login" element={<LoginView />} />

          <Route path="*" element={<HomeView />} />
        </Routes>
      </Suspense>
    </>
  );
};

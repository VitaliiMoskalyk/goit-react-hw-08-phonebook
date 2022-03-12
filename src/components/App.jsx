import Navbar from './Navbar/Navbar';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getCurrentUser } from 'redux/auth/authOperations';

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

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
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

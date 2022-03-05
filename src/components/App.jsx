import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Navbar from './organisms/Navbar/Navbar';
import { getCurrentUser } from 'redux/auth/authOperations';
import { lazy, Suspense } from 'react';

const AddContactView = lazy(() => import('views/private/AddContactView'));
const RegisterView = lazy(() => import('views/public/RegisterView'));
const LoginView = lazy(() => import('views/public/LogInView'));
const HomeView = lazy(() => import('views/public/HomeView'));

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

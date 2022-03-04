import { Routes, Route } from 'react-router-dom';
import Navbar from './organisms/Navbar/Navbar';
import { HomeView } from 'views/public/HomeView';
import { getCurrentUser } from 'redux/auth/authOperations';
//lazy---
import AddContactView from 'views/private/AddContactView';
import { RegisterView } from 'views/public/RegisterView';
import { LoginView } from 'views/public/LogInView';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Navbar />

      <Routes>
        <Route index element={<HomeView />} />
        <Route path="add" element={<AddContactView />} />

        <Route path="register" element={<RegisterView />} />
        <Route path="login" element={<LoginView />} />

        <Route path="*" element={<HomeView />} />
      </Routes>
    </>
  );
};

import { Routes, Route } from 'react-router-dom';
import Navbar from './organisms/Navbar/Navbar';
import { HomeView } from 'views/public/HomeView';
//lazy---
import AddContactView from 'views/private/AddContactView';
import { RegisterView } from 'views/public/RegisterView';
import { LoginView } from 'views/public/LogInView';

export const App = () => {
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

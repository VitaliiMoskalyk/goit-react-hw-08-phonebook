import { Routes, Route } from 'react-router-dom';
import Navbar from './navbar/navbar';
import { HomeView } from 'views/public/HomeView';
//lazy---
import { ContactsView } from 'views/private/ContactsView';
import AddContactView from 'views/private/AddContactView';
import { RegisterView } from 'views/public/RegisterView';
import { LoginView } from 'views/public/LogInView';

export const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route index element={<HomeView />} />
        <Route path="contacts" element={<ContactsView />} />
        <Route path="add" element={<AddContactView />} />

        <Route path="register" element={<RegisterView />} />
        <Route path="login" element={<LoginView />} />

        <Route path="*" element={<HomeView />} />
      </Routes>
    </>
  );
};

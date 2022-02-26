import { Routes, Route } from 'react-router-dom';
import { HomeView } from 'views/public/HomeView';
import { ContactsView } from 'views/private/ContactsView';
import { AddContactView } from 'views/private/AddContactView';
import { RegisterView } from 'views/public/RegisterView';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="contacts" element={<ContactsView />} />
        <Route path="add" element={<AddContactView />} />
        <Route path="register" element={<RegisterView />} />
      </Routes>
    </>
  );
};

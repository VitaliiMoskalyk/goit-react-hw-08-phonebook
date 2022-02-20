import Navbar from './navbar';
import ContactList from './Contacts/ContactList';
import { Routes, Route } from 'react-router-dom';
import Form from './Form/Form';
export const App = () => {
  return (
    <>
      <Routes>
        <Route
          index
          element={
            <>
              <Navbar />
              <ContactList />
            </>
          }
        />
        <Route path="add" element={<Form />} />
      </Routes>
    </>
  );
};

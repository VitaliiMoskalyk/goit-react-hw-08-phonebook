import { Routes, Route } from 'react-router-dom';
import { HomeView } from 'views/HomeView';
import { UserView } from 'views/UserView';
import { FormView } from 'views/FormView';
export const App = () => {
  return (
    <>
      <Routes>


        <Route path="/" element={<UserView />} />
        <Route path="user" element={<HomeView />} />
        <Route path="add" element={<FormView />} />
      </Routes>
    </>
  );
};

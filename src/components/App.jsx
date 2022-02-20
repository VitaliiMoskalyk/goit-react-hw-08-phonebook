import { Routes, Route } from 'react-router-dom';
// import { HomeView } from 'views/HomeView';
import { UserView } from 'views/UserView';
import { FormView } from 'views/FormView';
export const App = () => {
  return (
    <>
      <Routes>
        {/* <Route index element={<HomeView />} /> */}

        <Route index element={<UserView />} />
        <Route path="user" element={<UserView />} />
        <Route path="user/add" element={<FormView />} />
      </Routes>
    </>
  );
};

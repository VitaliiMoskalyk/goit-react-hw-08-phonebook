import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ContactList from 'components/organisms/ContactList';
import toast, { Toaster } from 'react-hot-toast';

function HomeView() {
  const auth = useSelector(state => state.auth.isLoaded);
  const error = useSelector(state => state.auth.error);

  return (
    <>
      {error && toast(`${error}`)}
      {auth ? (
        <ContactList />
      ) : (
        <>
          <h1 style={{ marginTop: '112px' }}>Hello, friend!</h1>
          <p>
            If you want add contacts- <NavLink to="register">register </NavLink>{' '}
            in this App.
            <br /> If you have an account - please{' '}
            <NavLink to="login">log in </NavLink>.
          </p>
        </>
      )}
      <Toaster />
    </>
  );
}

export default HomeView;

import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ContactList from 'components/organisms/ContactList';

export function HomeView() {
  const auth = useSelector(state => state.auth.isLoaded);

  return (
    <>
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
    </>
  );
}

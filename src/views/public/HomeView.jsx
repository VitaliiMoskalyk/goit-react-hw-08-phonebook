import Navbar from 'components/navbar';
import { NavLink } from 'react-router-dom';

export function HomeView() {
  return (
    <>
      <Navbar login>hhh</Navbar>
      <h1 style={{ marginTop: '112px' }}>Hello, friend!</h1>
      <p>If you want add contacts- register in this App</p>
      <NavLink to="contacts">user</NavLink>
      <NavLink to="add">add</NavLink>
    </>
  );
}

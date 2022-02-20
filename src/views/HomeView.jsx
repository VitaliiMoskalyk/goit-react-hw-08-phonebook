import Navbar from 'components/navbar';

export function HomeView() {
  return (
    <>
      <Navbar login />
      <h1 style={{ marginTop: '112px' }}>Hello, friend!</h1>
      <p>If you want add contacts- register in thia App</p>
    </>
  );
}

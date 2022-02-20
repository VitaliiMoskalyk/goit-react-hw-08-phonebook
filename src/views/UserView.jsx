import Navbar from 'components/navbar/navbar';
import ContactList from 'components/Contacts/ContactList/ContactList';

export function UserView() {
  return (
    <>
      <Navbar list search />
      <ContactList />
    </>
  );
}

import Navbar from 'components/navbar/navbar';
import ContactList from 'components/organisms/ContactList/ContactList';

export function ContactsView() {
  return (
    <>
      <Navbar list search />
      <ContactList />
    </>
  );
}

import ContactItem from '../../molecules/ContactItem/ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import Stack from '@mui/material/Stack';
import Spinner from '../Spinner';
import { getContacts, deleteContact } from 'redux/contacts/contactsOperations';
import { useEffect } from 'react';

const ContactList = () => {
  const search = useSelector(({ search }) => search);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const { contacts, error, isFetching } = useSelector(state => state.contacts);

  // const [deleteContact] = dispatch(deleteContact());

  const deleteContacts = contact => {
    dispatch(deleteContact(contact.id));
    dispatch(getContacts());
    // toast.success(`${contact.name} removed`);
  };

  function findForFilter() {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  return (
    <>
      {isFetching ? (
        <Spinner />
      ) : (
        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="center"
          style={{ marginTop: '120px' }}
        >
          {findForFilter().length === 0 && <p>no contacts</p>}
          {findForFilter().map(contact => (
            <div key={contact.id}>
              <ContactItem
                contact={contact}
                deleteFunction={() => deleteContacts(contact)}
              />
            </div>
          ))}
        </Stack>
      )}
      {error && <p>/{error.status}</p>}
    </>
  );
};

export default ContactList;

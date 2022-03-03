import ContactItem from '../../molecules/ContactItem/ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import Stack from '@mui/material/Stack';
import Spinner from '../Spinner';
import { getContacts } from 'redux/contacts/contactsOperations';
import { useEffect } from 'react';

const ContactList = () => {
  const search = useSelector(({ search }) => search);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const { contacts, error, isFetching } = useSelector(state => state.contacts);
  console.log(contacts);
  // const [deleteContact] = useDeleteContactMutation();

  // const deleteContacts = contact => {
  //   deleteContact(contact.id);
  //   // toast.success(`${contact.name} removed`);
  // };

  const findForFilter = () => {
    contacts.filter(({ name }) =>
      name.toLowerCase().includes(search.toLowerCase())
    );
  };

  return (
    <>
      {isFetching && <Spinner />}
      {error && <p>/{error.status}</p>}
      {contacts && (
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
                // deleteFunction={() => deleteContacts(contact)}
              />
            </div>
          ))}
        </Stack>
      )}
    </>
  );
};

export default ContactList;

import ContactItem from '../ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import Stack from '@mui/material/Stack';
import Spinner from '../../Spinner';
// import toast from 'react-hot-toast';
// import { ConfirmDelete } from '../../confirmDelete/ConfirmDelete';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from '../../../fetch/mockApi/mockApi';
// import { Loader } from '../../Loader/Loader';
// import { Accordion } from 'react-bootstrap';

const ContactList = () => {
  const { data, error, isFetching } = useGetContactsQuery('users');
  const filter = useSelector(({ filter }) => filter);

  const [deleteContact] = useDeleteContactMutation();

  const deleteContacts = contact => {
    deleteContact(contact.id);
    // toast.success(`${contact.name} removed`);
  };

  const findForFilter = () =>
    data.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <>
      {isFetching && <Spinner />}
      {error && <p>/{error.status}</p>}
      {data && (
        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="center"
          style={{ marginTop: '120px' }}
        >
          {findForFilter().length === 0 && <p>you don`t have contacts</p>}
          {findForFilter().map(contact => (
            <div key={contact.createdAt}>
              <ContactItem
                contact={contact}
                deleteFunction={() => deleteContacts(contact)}
              />
            </div>
          ))}
        </Stack>
      )}
    </>
  );
};

export default ContactList;

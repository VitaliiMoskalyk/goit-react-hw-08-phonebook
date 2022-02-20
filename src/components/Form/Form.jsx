import { useState } from 'react';
import { FormWrapper } from './Form.styled';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from '../../fetch/mockApi/mockApi';
import { TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

const Form = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const [updatePost] = useAddContactMutation();
  const { data } = useGetContactsQuery();

  const onSubmitForm = result => {
    const contactName = result.name;
    const normolizeData = contactName.toLowerCase();
    data.find(contact => contact.name.toLowerCase() === normolizeData);
    // ? toast.error(`${contactName} is already in contacts`)
    updatePost(result);
  };

  const contactsAdder = evt => {
    evt.preventDefault();
    const newContact = generateContact(name, phone);
    onSubmitForm(newContact);
    // toast.success(`${name} added`);
    setName('');
    setPhone('');
  };

  const generateContact = (name, phone) => {
    return { name, phone };
  };

  return (
    <FormWrapper onSubmit={contactsAdder} style={{ marginTop: '120px' }}>
      <TextField
        id="name"
        label="Name"
        value={name}
        variant="outlined"
        onChange={evt => setName(evt.target.value)}
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        type="text"
        autoComplete="off"
        size="small"
        margin="normal"
        inputProps={{
          pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
        }}
        required
      />
      <TextField
        id="phone"
        label="Phone"
        value={phone}
        variant="outlined"
        onChange={evt => setPhone(evt.target.value)}
        title="+3805012345678"
        type="tel"
        autoComplete="off"
        size="small"
        margin="normal"
        inputProps={{
          pattern: '^\\+[\\(\\-]?(\\d[\\(\\)\\-]?){11}\\d$',
          // '+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}',
        }}
        required
      />
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        // aria-label="menu"
        // sx={{ mr: 2 }}
        type="submit"
      >
        <AddIcCallIcon />
      </IconButton>
    </FormWrapper>
  );
};

export default Form;

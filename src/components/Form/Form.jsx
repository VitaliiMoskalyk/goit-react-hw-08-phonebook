import { useState } from 'react';
import { FormWrapper, FormButton } from './Form.styled';
import { useNavigate } from 'react-router-dom';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from '../../fetch/mockApi/mockApi';
// import { addContact } from '../images/add';
import { TextField } from '@mui/material';

const Form = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const [updatePost] = useAddContactMutation();
  const { data } = useGetContactsQuery();
  let navigate = useNavigate();

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
      {/* <label htmlFor={name}> */}
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
      {/* <input
          value={name}
          type="text"
          autoComplete="off"
          placeholder="Ann Ferdinand"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={evt => setName(evt.target.value)}
        /> */}
      {/* </label> */}

      {/* <label htmlFor={phone}>
        <input
          value={phone}
          onChange={evt => setPhone(evt.target.value)}
          type="tel"
          autoComplete="off"
          placeholder="+3805098765432"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label> */}

      <FormButton type="submit">add</FormButton>
      <FormButton type="button" onClick={() => navigate('/')}>
        back
      </FormButton>
    </FormWrapper>
  );
};

export default Form;

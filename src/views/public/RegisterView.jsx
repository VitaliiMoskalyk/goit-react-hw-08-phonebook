import { TextField } from '@mui/material';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import { FormWrapper } from '../../components/organisms/Form/Form.styled';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authSlice';

export const RegisterView = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  //   const onSubmitForm = result => {
  //     const contactName = result.name;
  //     const normolizeData = contactName.toLowerCase();
  //     data.find(contact => contact.name.toLowerCase() === normolizeData);
  //     // ? toast.error(`${contactName} is already in contacts`)
  //     updatePost(result);
  //   };

  const userAdder = evt => {
    evt.preventDefault();
    const newUser = generateContact(name, email, password);
    console.log(newUser);
    // dispatch(registerUser(newUser));
    dispatch(register(newUser));
    // onSubmitForm(newUser);
    // toast.success(`${name} added`);
    setName('');
    setEmail('');
    setPassword('');
  };

  const generateContact = (name, email, password) => {
    return { name, email, password };
  };

  return (
    <FormWrapper onSubmit={userAdder} style={{ marginTop: '120px' }}>
      <TextField
        id="name"
        label="Name"
        value={name}
        variant="outlined"
        onChange={e => setName(e.target.value)}
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
        id="e-mail"
        label="E-mail"
        value={email}
        variant="outlined"
        onChange={e => setEmail(e.target.value)}
        title="example@mail.com"
        type="mail"
        autoComplete="off"
        size="small"
        margin="normal"
        // inputProps={{
        //   pattern: '^\\+[\\(\\-]?(\\d[\\(\\)\\-]?){11}\\d$',
        //   // '+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}',
        // }}
        required
      />
      <TextField
        id="password"
        label="Password"
        value={password}
        variant="outlined"
        onChange={e => setPassword(e.target.value)}
        title="********"
        type="password"
        autoComplete="off"
        size="small"
        margin="normal"
        // inputProps={{
        //   pattern: '^\\+[\\(\\-]?(\\d[\\(\\)\\-]?){11}\\d$',
        //   // '+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}',
        // }}
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
        +
      </IconButton>
    </FormWrapper>
  );
};

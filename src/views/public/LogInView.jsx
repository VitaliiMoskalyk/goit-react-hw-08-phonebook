import EmailLabel from 'components/atoms/inputs/labels/EmailLabel';
import PasswordLabel from 'components/atoms/inputs/labels/PasswordLabel';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import { FormWrapper } from '../../components/molecules/FormWrapper&Submit/FormWrapper';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/authSlice';

export const LoginView = () => {
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
    const newUser = generateContact(email, password);
    console.log(newUser);
    // dispatch(registerUser(newUser));
    dispatch(login(newUser));
    // onSubmitForm(newUser);
    // toast.success(`${name} added`);
    setEmail('');
    setPassword('');
  };

  const generateContact = (email, password) => {
    return { email, password };
  };

  return (
    <FormWrapper onSubmit={userAdder} style={{ marginTop: '120px' }}>
      <EmailLabel value={email} onchange={e => setEmail(e.target.value)} />
      <PasswordLabel
        value={password}
        onchange={e => setPassword(e.target.value)}
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
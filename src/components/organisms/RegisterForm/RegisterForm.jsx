import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authSlice';
import { FormWrapper } from 'components/molecules/FormWrapper&Submit/FormWrapper';
import NameLabel from 'components/atoms/inputs/labels/NameLabel';
import EmailLabel from 'components/atoms/inputs/labels/EmailLabel';
import PasswordLabel from 'components/atoms/inputs/labels/PasswordLabel';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const userAdder = evt => {
    evt.preventDefault();
    const newUser = generateContact(name, email, password);
    dispatch(register(newUser));
    setName('');
    setEmail('');
    setPassword('');
  };

  const generateContact = (name, email, password) => {
    return { name, email, password };
  };

  return (
    <FormWrapper onSubmit={userAdder} submitButton="+">
      <NameLabel value={name} onchange={e => setName(e.currentTarget.value)} />
      <EmailLabel value={email} onchange={e => setEmail(e.target.value)} />
      <PasswordLabel
        value={password}
        onchange={e => setPassword(e.target.value)}
      />
    </FormWrapper>
  );
};

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { register } from 'redux/auth/authOperations';
import { FormWrapper } from 'components/FormWrapper&Submit/FormWrapper';
import NameLabel from 'components/labels/NameLabel';
import EmailLabel from 'components/labels/EmailLabel';
import PasswordLabel from 'components/labels/PasswordLabel';
import toast, { Toaster } from 'react-hot-toast';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const userAdder = evt => {
    evt.preventDefault();
    const newUser = generateContact(name, email, password);
    dispatch(register(newUser))
      ? navigate((location.pathname = '/'))
      : toast.error(`${name} is already in contacts`);
    setName('');
    setEmail('');
    setPassword('');
  };

  const generateContact = (name, email, password) => {
    return { name, email, password };
  };

  return (
    <FormWrapper onSubmit={userAdder} submitButton="Register">
      <NameLabel value={name} onchange={e => setName(e.currentTarget.value)} />
      <EmailLabel value={email} onchange={e => setEmail(e.target.value)} />
      <PasswordLabel
        value={password}
        onchange={e => setPassword(e.target.value)}
      />
      <Toaster />
    </FormWrapper>
  );
};

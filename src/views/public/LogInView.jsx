import EmailLabel from 'components/labels/EmailLabel';
import PasswordLabel from 'components/labels/PasswordLabel';
import { useState } from 'react';
import { FormWrapper } from '../../components/FormWrapper&Submit/FormWrapper';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/authOperations';
import { useNavigate } from 'react-router-dom';

const LoginView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userAdder = evt => {
    evt.preventDefault();
    const newUser = generateContact(email, password);
    dispatch(login(newUser));
    // toast.success(`${name} added`);
    navigate('/');
    setEmail('');
    setPassword('');
  };

  const generateContact = (email, password) => {
    return { email, password };
  };

  return (
    <FormWrapper onSubmit={userAdder} submitButton="Log In">
      <EmailLabel value={email} onchange={e => setEmail(e.target.value)} />
      <PasswordLabel
        value={password}
        onchange={e => setPassword(e.target.value)}
      />
    </FormWrapper>
  );
};
export default LoginView;

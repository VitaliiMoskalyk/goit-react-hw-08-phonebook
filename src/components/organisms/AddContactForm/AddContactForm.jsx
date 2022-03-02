import { useState } from 'react';
import { FormWrapper } from '../../molecules/FormWrapper&Submit/FormWrapper';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from '../../../fetch/mockApi/mockApi';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import NameLabel from 'components/atoms/inputs/labels/NameLabel';
import PhoneLabel from 'components/atoms/inputs/labels/PhoneLabel';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const AddContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const [updatePost] = useAddContactMutation();
  const { data } = useGetContactsQuery();

  const navigate = useNavigate();
  let authSelector = useSelector(state => state.auth.isLoaded);

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
    navigate('/');
    setName('');
    setPhone('');
  };

  const generateContact = (name, phone) => {
    return { name, phone };
  };

  return (
    authSelector && (
      <FormWrapper onSubmit={contactsAdder} submitButton={<AddIcCallIcon />}>
        <NameLabel value={name} onchange={evt => setName(evt.target.value)} />
        <PhoneLabel
          value={phone}
          onchange={evt => setPhone(evt.target.value)}
        />
      </FormWrapper>
    )
  );
};

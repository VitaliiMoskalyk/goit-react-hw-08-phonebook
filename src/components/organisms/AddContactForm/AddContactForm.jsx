import { useState } from 'react';
import { FormWrapper } from '../../molecules/FormWrapper&Submit/FormWrapper';
// import {
//   useAddContactMutation,
//   useGetContactsQuery,
// } from '../../../fetch/mockApi/mockApi';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import NameLabel from 'components/atoms/inputs/labels/NameLabel';
import PhoneLabel from 'components/atoms/inputs/labels/PhoneLabel';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postContact } from 'redux/contacts/contactsOperations';

export const AddContactForm = () => {
  const [name, setName] = useState('');
  const [number, setPhone] = useState('');

  const dispatch = useDispatch();
  const data = useSelector(state => state.contacts.contacts);

  const navigate = useNavigate();
  let authSelector = useSelector(state => state.auth.isLoaded);

  const onSubmitForm = result => {
    const contactName = result.name;
    const normolizeData = contactName.toLowerCase();
    !data.find(result => result.name.toLowerCase() === normolizeData) &&
      dispatch(postContact(result));
    // ? toast.error(`${contactName} is already in contacts`)
  };

  const contactsAdder = evt => {
    evt.preventDefault();
    const newContact = generateContact(name, number);
    onSubmitForm(newContact);
    // toast.success(`${name} added`);
    navigate('/');
    setName('');
    setPhone('');
  };

  const generateContact = (name, number) => {
    return { name, number };
  };

  return (
    authSelector && (
      <FormWrapper onSubmit={contactsAdder} submitButton={<AddIcCallIcon />}>
        <NameLabel value={name} onchange={evt => setName(evt.target.value)} />
        <PhoneLabel
          value={number}
          onchange={evt => setPhone(evt.target.value)}
        />
      </FormWrapper>
    )
  );
};

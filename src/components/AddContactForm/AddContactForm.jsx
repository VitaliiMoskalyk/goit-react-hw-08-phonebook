import { useState } from 'react';
import { FormWrapper } from '../FormWrapper&Submit/FormWrapper';
import NameLabel from 'components/labels/NameLabel';
import PhoneLabel from 'components/labels/PhoneLabel';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postContact } from 'redux/contacts/contactsOperations';
import toast, { Toaster } from 'react-hot-toast';

export const AddContactForm = () => {
  const [name, setName] = useState('');
  const [number, setPhone] = useState('');

  const dispatch = useDispatch();
  const data = useSelector(state => state.contacts.contacts);

  const navigate = useNavigate();
  const location = useLocation();

  console.log(location.pathname);
  let authSelector = useSelector(state => state.auth.isLoaded);

  const onSubmitForm = result => {
    const contactName = result.name;
    const normolizeData = contactName.toLowerCase();
    return data.find(result => result.name.toLowerCase() === normolizeData)
      ? null
      : dispatch(postContact(result));
  };

  const contactsAdder = evt => {
    evt.preventDefault();
    const newContact = generateContact(name, number);
    onSubmitForm(newContact)
      ? navigate((location.pathname = '/'))
      : toast.error(`${name} is already in contacts`);
    setName('');
    setPhone('');
  };

  const generateContact = (name, number) => {
    return { name, number };
  };

  return (
    <>
      {authSelector && (
        <FormWrapper onSubmit={contactsAdder} submitButton="Add contact">
          <NameLabel value={name} onchange={evt => setName(evt.target.value)} />

          <PhoneLabel
            value={number}
            onchange={evt => setPhone(evt.target.value)}
          />

          <Toaster />
        </FormWrapper>
      )}
    </>
  );
};

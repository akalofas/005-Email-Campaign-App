import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../features/contact/contactActions/fetchContacts';
import { deleteContact } from '../features/contact/contactActions/deleteContact';
import ContactList from '../components/ContactList';

const ContactListContainer = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contact.contacts);
  const status = useSelector(state => state.contact.status);
  const error = useSelector(state => state.contact.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return <ContactList contacts={contacts} status={status} error={error} onDelete={handleDelete} />;
};

export default ContactListContainer;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactGroups } from '../features/contactGroup/contactGroupActions/fetchContactGroups';
import { deleteContactGroup } from '../features/contactGroup/contactGroupActions/deleteContactGroup';
import ContactGroupList from '../components/ContactGroupList';

const ContactGroupListContainer = () => {
  const dispatch = useDispatch();
  const contactGroups = useSelector(state => state.contactGroup.contactGroups);
  const status = useSelector(state => state.contactGroup.status);
  const error = useSelector(state => state.contactGroup.error);

  useEffect(() => {
    dispatch(fetchContactGroups());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteContactGroup(id));
  };

  return <ContactGroupList contactGroups={contactGroups} status={status} error={error} onDelete={handleDelete} />;
};

export default ContactGroupListContainer;

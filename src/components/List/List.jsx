import ListItem from '../ListItem/ListItem';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getContacts } from '../../store/actions/contactsActions';
import api from './api/contacts-service.js';
import './List.css';
function List({ transferContact }) {
  const dispatch = useDispatch();
  async function getContactsFromStorage() {
    try {
      const response = await api.get('/');
      dispatch(getContacts(response.data));
    } catch (error) {
      console.error(error.message);
    }
  }
  useEffect(() => {
    getContactsFromStorage();
  }, [getContacts]);
  return (
    <div className='list-container'>
      <h2>Contact List</h2>
      {contacts.map((contact) => (
        <ListItem
          key={contact.id}
          contact={contact}
          transferContact={transferContact}
        />
      ))}
    </div>
  );
}

export default List;

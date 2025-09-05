import ListItem from '../ListItem/ListItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../store/actions/contactsActions';
import api from '../../api/contacts-service';
import './List.css';
function List() {
  const contacts = useSelector((state) => state.contacts)
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
        />
      ))}
    </div>
  );
}

export default List;

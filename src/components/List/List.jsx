import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListItem from '../ListItem/ListItem';
import { getContacts } from '../../store/slices/contactSlices';
import './List.css';

function List() {
  const contacts = useSelector((state) => state.contactList.contacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);
  return (
    <div className='list-container'>
      <h2>Contact List</h2>
      {contacts.map((contact) => (
        <ListItem key={contact.id} contact={contact} />
      ))}
    </div>
  );
}

export default List;

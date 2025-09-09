import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListItem from '../ListItem/ListItem';
import { getContactsAction } from '../../store/actions/contactsActions';
import './List.css';

function List() {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContactsAction());
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

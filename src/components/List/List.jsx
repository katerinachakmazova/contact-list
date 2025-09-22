import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {List as ListMui} from '@mui/material';
import Typography from '@mui/material/Typography';
import ListItem from '../ListItem/ListItem';
import { getContacts } from '../../store/slices/contactSlices';

function List() {
  const contacts = useSelector((state) => state.contactList.contacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);
  return (
    <ListMui >
      <Typography variant='h4' sx={{margin: '10px 15px 5px 15px'}}>Contact List</Typography>
      {contacts.map((contact) => (
        <ListItem key={contact.id} contact={contact} />
      ))}
    </ListMui>
  );
}

export default List;

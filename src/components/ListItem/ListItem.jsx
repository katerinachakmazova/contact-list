import { useDispatch } from 'react-redux';
import {ListItem as ListItemMui} from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import CancelIcon from '@mui/icons-material/Cancel';
import IconButton from '@mui/material/IconButton';
import {
  deleteContact,
  setCurrentContact,
  clearCurrentContact,
} from '../../store/slices/contactSlices';


function ListItem({ contact }) {
  const dispatch = useDispatch();
  const { fName, lName, id } = contact;

  function onDelete(id) {
    dispatch(deleteContact(id));
    dispatch(clearCurrentContact());
  }

  return (
    <ListItemMui 
    divider = {true}
    secondaryAction={
            <IconButton aria-label="delete"
            onClick={() => onDelete(id)}
            >
              <CancelIcon />
            </IconButton>
          }>
      <ListItemText onDoubleClick={() => dispatch(setCurrentContact(contact))}>
        {fName + ' ' + lName}
      </ListItemText>
    </ListItemMui>
  );
}

export default ListItem;

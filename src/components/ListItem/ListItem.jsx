import { useDispatch } from 'react-redux';
import {
  deleteContact,
  setCurrentContact,
  clearCurrentContact,
} from '../../store/actions/contactsActions';
import api from '../../api/contacts-service';
import './ListItem.css';

function ListItem({ contact }) {
  const dispatch = useDispatch();
  const { fName, lName, id } = contact;

  async function onDelete(id) {
    try {
      await api
        .delete(`/${id}`)
        .then(({ statusText }) => console.log(statusText));
      dispatch(deleteContact(id));
      dispatch(clearCurrentContact());
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div className='list-item'>
      <p onDoubleClick={() => dispatch(setCurrentContact(id))}>
        {fName + ' ' + lName}
      </p>
      <span onClick={() => onDelete(id)}>X</span>
    </div>
  );
}

export default ListItem;

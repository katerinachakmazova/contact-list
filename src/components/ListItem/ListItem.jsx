import { useDispatch } from 'react-redux';
import { deleteContact } from '../../store/actions/contactsActions';
import api from './api/contacts-service.js';
import './ListItem.css';
function ListItem({ contact, transferContact }) {
  const dispatch = useDispatch();
  async function onDelete(id) {
    try {
      await api.delete(`/${id}`);
      dispatch(deleteContact(id));
    } catch (error) {
      console.error(error.message);
    }
  }
  const { fName, lName, id } = contact;
  return (
    <div className='list-item'>
      <p onDoubleClick={() => transferContact(contact)}>
        {fName + ' ' + lName}
      </p>
      <span onClick={() => onDelete(id)}>X</span>
    </div>
  );
}

export default ListItem;

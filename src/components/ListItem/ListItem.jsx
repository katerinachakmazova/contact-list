import { useDispatch } from 'react-redux';
import { deleteContact } from '../../store/actions/contactsActions';
import api from '../../api/contacts-service';
import './ListItem.css';
import { ContactContext } from '../../context';
import { useContext } from 'react';
function ListItem({ contact }) {
  const dispatch = useDispatch();
  const {transferContact} = useContext(ContactContext)
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

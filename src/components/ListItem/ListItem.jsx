import { useDispatch } from 'react-redux';
import {
  deleteContactAction,
  setCurrentContact,
  clearCurrentContact,
} from '../../store/actions/contactsActions';
import './ListItem.css';

function ListItem({ contact }) {
  const dispatch = useDispatch();
  const { fName, lName, id } = contact;

  function onDelete(id) {
    dispatch(deleteContactAction(id));
    dispatch(clearCurrentContact());
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

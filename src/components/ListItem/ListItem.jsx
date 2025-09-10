import { useDispatch } from 'react-redux';
import {
  deleteContact,
  setCurrentContact,
  clearCurrentContact,
} from '../../store/slices/contactSlices';
import './ListItem.css';

function ListItem({ contact }) {
  const dispatch = useDispatch();
  const { fName, lName, id } = contact;

  function onDelete(id) {
    dispatch(deleteContact(id));
    dispatch(clearCurrentContact());
  }

  return (
    <div className='list-item'>
      <p onDoubleClick={() => dispatch(setCurrentContact(contact))}>
        {fName + ' ' + lName}
      </p>
      <span onClick={() => onDelete(id)}>X</span>
    </div>
  );
}

export default ListItem;

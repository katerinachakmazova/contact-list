import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteContactAction,
  addContactAction,
  updateContactAction,
  clearCurrentContact,
} from '../../store/actions/contactsActions';
import './Form.css';

function Form() {
  const dispatch = useDispatch();
  const contact = useSelector((state) => state.currentContact);
  const [currentContact, setCurrentContact] = useState({
    fName: '',
    lName: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    setCurrentContact(contact);
  }, [contact]);

  const handleDelete = () => {
    dispatch(deleteContactAction(currentContact.id));
    dispatch(clearCurrentContact());
  };

  const onClear = (event) => {
    const input = event.target.previousSibling;
    setCurrentContact({
      ...currentContact,
      [input.name]: '',
    });
  };

  const onInputChange = (event) => {
    setCurrentContact({
      ...currentContact,
      [event.target.name]: event.target.value,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!currentContact.id) {
      dispatch(addContactAction(currentContact));
      dispatch(clearCurrentContact());
    } else {
      dispatch(updateContactAction(currentContact));
    }
  };

  return (
    <form onSubmit={onFormSubmit} className='block-container'>
      <div className='inputs-container'>
        <div className='input-item-container'>
          <input
            type='text'
            placeholder='First Name'
            name='fName'
            onChange={onInputChange}
            value={currentContact.fName}
          />
          <span onClick={onClear}>X</span>
        </div>
        <div className='input-item-container'>
          <input
            type='text'
            placeholder='Last Name'
            name='lName'
            onChange={onInputChange}
            value={currentContact.lName}
          />
          <span onClick={onClear}>X</span>
        </div>
        <div className='input-item-container'>
          <input
            type='email'
            placeholder='Email'
            name='email'
            onChange={onInputChange}
            value={currentContact.email}
          />
          <span onClick={onClear}>X</span>
        </div>
        <div className='input-item-container'>
          <input
            type='tel'
            placeholder='phone'
            name='phone'
            onChange={onInputChange}
            value={currentContact.phone}
          />
          <span onClick={onClear}>X</span>
        </div>
      </div>
      <div className='button-container'>
        <button id='save'>Save</button>
        {currentContact.id ? (
          <button type='button' onClick={handleDelete} id='delete'>
            Delete
          </button>
        ) : (
          ''
        )}
      </div>
    </form>
  );
}

export default Form;

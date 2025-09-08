import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteContact,
  addContact,
  updateContact,
  clearCurrentContact,
} from '../../store/actions/contactsActions';
import api from '../../api/contacts-service';
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

  const handleDelete = async () => {
    try {
      await api
        .delete(`/${currentContact.id}`)
        .then(({ statusText }) => console.log(statusText));
      dispatch(deleteContact(currentContact.id));
      dispatch(clearCurrentContact());
    } catch (error) {
      console.error(error.message);
    }
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

  const onFormSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!currentContact.id) {
        const { data, statusText } = await api.post('/', currentContact);
        console.log(statusText);
        dispatch(addContact(data));
        dispatch(clearCurrentContact());
      } else {
        const { data, statusText } = await api.put(
          `/${currentContact.id}`,
          currentContact
        );
        console.log(statusText);
        dispatch(updateContact(data));
      }
    } catch (error) {
      console.error(error.message);
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
          <button type="button" onClick={handleDelete} id='delete'>
            Delete
          </button>
          ) : ('')
        }
      </div>
    </form>
  );
}

export default Form;

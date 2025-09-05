import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  deleteContact,
  addContact,
  updateContact,
} from '../../store/actions/contactsActions';
import api from '../../api/contacts-service';
import './Form.css';
function Form({ currentContactFromApp }) {
  const dispatch = useDispatch();
  const clearCurrentContact = () => {
    return {
      fName: '',
      lName: '',
      email: '',
      phone: '',
    };
  };

  const [currentContact, setCurrentContact] = useState(clearCurrentContact());

  useEffect(() => {
    setCurrentContact(currentContactFromApp);
  }, [currentContactFromApp]);

  const handleDelete = async () => {
    try {
      await api.delete(`/${currentContact.id}`);
      dispatch(deleteContact(currentContact.id));
      clearForm();
    } catch (error) {
      console.error(error.message);
    }
  };
  const clearForm = () => {
    setCurrentContact(clearCurrentContact());
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
      if (!currentContact.id){
       const {data} = await api.post('/', currentContact);
       dispatch(addContact(data));
       clearForm();
      }
      else {
        const {data} = await api.put(`/${currentContact.id}`, currentContact);
        dispatch(updateContact(data))
      }
    } catch (error) {
      console.error(error.message)
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
          <button onClick={handleDelete} id='delete'>
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

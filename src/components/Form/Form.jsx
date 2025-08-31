import { useState, useEffect } from 'react';
import './Form.css';
function Form({ currentContactFromApp, onDelete, onSave }) {
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
  const handleDelete = () => {
    onDelete(currentContact.id);
    clearForm();
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
  const onFormSubmit = (event) => {
    event.preventDefault();
    onSave({
      fName: currentContact.fName,
      lName: currentContact.lName,
      email: currentContact.email,
      phone: currentContact.phone,
      id: currentContact.id,
    });
    if (!currentContact.id) {
      clearForm();
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

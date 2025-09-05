import { useState } from 'react';
import './App.css';
import List from './components/List/List';
import Form from './components/Form/Form';
import { ContactContext } from './context';

function App() {
  const [currentContact, setCurrentContact] = useState(clearCurrentContact());

  const transferContact = (contact) => {
    setCurrentContact({
      fName: contact.fName,
      lName: contact.lName,
      email: contact.email,
      phone: contact.phone,
      id: contact.id,
    });
  };
  const newContact = () => {
    setCurrentContact(() => clearCurrentContact());
  };

  function clearCurrentContact() {
    return {
      fName: '',
      lName: '',
      email: '',
      phone: '',
    };
  }
  return (
    <>
      <ContactContext.Provider value = {{
        transferContact: transferContact,
      }}>
        <div className='block-container'>
          <List/>
          <button onClick={newContact}>New</button>
        </div>
        <Form currentContactFromApp={currentContact} />
      </ContactContext.Provider>
    </>
  );
}

export default App;

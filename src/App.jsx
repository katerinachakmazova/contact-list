import { useEffect, useState } from 'react';
import './App.css';
import { nanoid } from 'nanoid';
import api from './api/contacts-service.js';
import List from './components/List/List';
import Form from './components/Form/Form';

function App() {
  const [arrContacts, setArrContacts] = useState([]);
  const [currentContact, setCurrentContact] = useState(clearCurrentContact());

  useEffect(getContactsFromStorage, []);
  function getContactsFromStorage() {
    api.get('/').then(({ data }) => {
      if (data) {
        setArrContacts(data);
      }
    });
  }
  const deleteContact = (id) => {
    api.delete(`/${id}`);
    const contacts = arrContacts.filter((contact) => contact.id !== id);
    setArrContacts(contacts);
    newContact();
  };
  const saveContact = (contact) => {
    if (!contact.id) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
  };
  const addContact = (newContact) => {
    newContact.id = nanoid();
    api.post('/', newContact).then(({ data }) => {
      const contacts = [...arrContacts, newContact];
      setArrContacts(contacts);
    });
  };
  const updateContact = (contact) => {
    api.put(`/${contact.id}`, contact).then(({ data }) => {
      const contacts = arrContacts.map((item) =>
        data.id === item.id ? data : item
      );
      setArrContacts(contacts);
    });
  };
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
      <div className='block-container'>
        <List
          contacts={arrContacts}
          onDelete={deleteContact}
          transferContact={transferContact}
        />
        <button onClick={newContact}>New</button>
      </div>
      <Form
        onDelete={deleteContact}
        onSave={saveContact}
        currentContactFromApp={currentContact}
      />
    </>
  );
}

export default App;

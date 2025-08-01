import { useEffect, useState } from 'react';
import './App.css';
import { nanoid } from 'nanoid';
import List from './components/List/List';
import Form from './components/Form/Form';

function App() {
  const [arrContacts, setArrContacts] = useState([]);
  const [currentContact, setCurrentContact] = useState(
    () => clearCurrentContact
  );

  useEffect(getContactsFromStorage, []);
  function getContactsFromStorage() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts) {
      setArrContacts(contacts);
    }
  }
  const deleteContact = (id) => {
    const contacts = arrContacts.filter((contact) => contact.id !== id);
    setArrContacts(contacts);
    saveContacts(contacts);
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
    const contacts = [...arrContacts, newContact];
    setArrContacts(contacts);
    saveContacts(contacts);
  };
  const updateContact = (contact) => {
    const contacts = arrContacts.map((item) =>
      contact.id === item.id ? contact : item
    );
    setArrContacts(contacts);
    saveContacts(contacts);
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
    return {};
  }
  const saveContacts = (contacts) => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  };
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
        key={currentContact.id}
        currentContactFromApp={currentContact}
      />
    </>
  );
}

export default App;

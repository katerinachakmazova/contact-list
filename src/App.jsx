import { Component } from 'react';
import './App.css';
import { nanoid } from 'nanoid';
import List from './components/List/List';
import Form from './components/Form/Form';

export class App extends Component {
  state = {
    contacts: [],
    currentContact: this.clearCurrentContact()
  };
    componentDidMount () {
    const contacts = JSON.parse(localStorage.getItem('contacts'))
    if(!contacts){
      this.setState({
        contacts: [],
      })
    }
    else{
      this.setState({
        contacts: [...contacts]
      })
    }
  }
  deleteContact = (id) => {
    this.setState((state) => {
      const contacts = state.contacts.filter((contact) => contact.id !== id);
      this.saveContacts(contacts);
      return {
        contacts,
      };
    });
  };
  saveContact = (contact) => {
    if (!contact.id) {
      this.addContact(contact);
    } else {
      this.updateContact(contact);
    }
  };
  addContact = (newContact) => {
    newContact.id = nanoid();
    this.setState((state) => {
      const contacts = [...state.contacts, newContact];
      this.saveContacts(contacts);
      return {
        contacts,
      };
    });
  };
  updateContact = (contact) => {
    this.setState((state) => {
      const contacts = state.contacts.map((item) =>
        contact.id === item.id ? contact : item
      );
      this.saveContacts(contacts);
      return {
        contacts,
      };
    });
  };
  transferContact = (contact) => {
    this.setState({
      currentContact: {
        fName: contact.fName,
        lName: contact.lName,
        email: contact.email,
        phone: contact.phone,
        id: contact.id,
      },
    });
  };
  newContact = () => {
    this.setState({
      currentContact: this.clearCurrentContact()
    });
  };

  clearCurrentContact () {
    return {};
  }
  saveContacts = (contacts) => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  };
  render() {
    return (
      <>
        <div className='block-container'>
          <List
            contacts={this.state.contacts}
            onDelete={this.deleteContact}
            transferContact={this.transferContact}
          />
          <button onClick={this.newContact}>New</button>
        </div>
        <Form
          onDelete={this.deleteContact}
          onSave={this.saveContact}
          key={this.state.currentContact.id}
          currentContact={this.state.currentContact}
        />
      </>
    );
  }
}

export default App;

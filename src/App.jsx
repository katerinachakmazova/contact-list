import { useState } from 'react';
import './App.css';
import List from './components/List/List';
import Form from './components/Form/Form';
import { ContactContext } from './context';

function App() {
  const [currentId, setCurrentId] = useState(null);
  const newContact = () => {
    setCurrentId(null);
  };
  return (
    <>
      <ContactContext.Provider value = {{
        currentId,
        setCurrentId: setCurrentId,
      }}>
        <div className='block-container'>
          <List/>
          <button onClick={newContact}>New</button>
        </div>
        <Form/>
      </ContactContext.Provider>
    </>
  );
}

export default App;

import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import Button from '@mui/material/Button';
import List from './components/List/List';
import Form from './components/Form/Form';
import { clearCurrentContact } from './store/slices/contactSlices';
import './App.css';
function App() {
  const dispatch = useDispatch();
  const formRef = useRef(null);
    const handleClearForm = () => {
      formRef.current.resetForm();
      dispatch(clearCurrentContact());
  };
  return (
    <>
        <div className='block-container'>
          <List/>
          <Button 
          onClick={handleClearForm}
          variant='outlined'>New</Button>
        </div>
        <Form formRef={formRef}/>
    </>
  );
}

export default App;

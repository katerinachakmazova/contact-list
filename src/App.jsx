import { clearCurrentContact } from './store/actions/contactsActions';
import { useDispatch } from 'react-redux';
import './App.css';
import List from './components/List/List';
import Form from './components/Form/Form';

function App() {
  const dispatch = useDispatch();
  return (
    <>
        <div className='block-container'>
          <List/>
          <button onClick={() => dispatch(clearCurrentContact())}>New</button>
        </div>
        <Form/>
    </>
  );
}

export default App;

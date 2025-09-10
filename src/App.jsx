import { useDispatch } from 'react-redux';
import List from './components/List/List';
import Form from './components/Form/Form';
import { clearCurrentContact } from './store/slices/contactSlices';
import './App.css';
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

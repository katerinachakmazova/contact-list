import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import Button from '@mui/material/Button';
import CancelIcon from '@mui/icons-material/Cancel';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import {
  deleteContact,
  addContact,
  updateContact,
  clearCurrentContact,
} from '../../store/slices/contactSlices';
import { validSchema } from '../../util/formValidSchema';
import './Form.css';

function Form({ formRef }) {
  const dispatch = useDispatch();
  const contact = useSelector((state) => state.contactList.currentContact);

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
    dispatch(clearCurrentContact());
  };

  const onFormSubmit = (values, { resetForm }) => {
    if (!contact.id) {
      dispatch(addContact(values));
      resetForm();
    } else {
      dispatch(updateContact(values));
    }
  };


  const renderForm = ({ isValid, setFieldValue }) => {
    const handleClear = (field) => {
      setFieldValue(field, '');
    };
    return (
      <FormikForm className='block-container'>
          <div className='input-item-container'>
            <Field as={TextField} type='text' label='First Name' name='fName' />
            <IconButton
              aria-label='delete'
              onClick={() => handleClear('fName')}
            >
              <CancelIcon />
            </IconButton>
          </div>
          <ErrorMessage name='fName'>
            {(message) => <Alert severity='error'>{message}</Alert>}
          </ErrorMessage>
          <div className='input-item-container'>
            <Field as={TextField} type='text' label='Last Name' name='lName' />
            <IconButton
              aria-label='delete'
              onClick={() => handleClear('lName')}
            >
              <CancelIcon />
            </IconButton>
          </div>
          <div className='input-item-container'>
            <Field as={TextField} type='email' label='Email' name='email' />
            <IconButton
              aria-label='delete'
              onClick={() => handleClear('email')}
            >
              <CancelIcon />
            </IconButton>
          </div>
          <ErrorMessage name='email'>
            {(message) => <Alert severity='error'>{message}</Alert>}
          </ErrorMessage>
          <div className='input-item-container'>
            <Field as={TextField} type='tel' label='phone' name='phone' />
            <IconButton
              aria-label='delete'
              onClick={() => handleClear('phone')}
            >
              <CancelIcon />
            </IconButton>
          </div>
          <ErrorMessage name='phone'>
            {(message) => <Alert severity='error'>{message}</Alert>}
          </ErrorMessage>
        <div className='button-container'>
          <Button id='save' type='submit' disabled={!isValid}>
            Save
          </Button>
          {contact.id ? (
            <Button type='button' onClick={handleDelete} id='delete'>
              Delete
            </Button>
          ) : (
            ''
          )}
        </div>
      </FormikForm>
    );
  };
  return (
    <Formik
      initialValues={contact}
      innerRef={formRef}
      onSubmit={onFormSubmit}
      validationSchema={validSchema}
      enableReinitialize
    >
      {renderForm}
    </Formik>
  );
}

export default Form;

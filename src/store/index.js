import { createStore, applyMiddleware } from 'redux';
import { composeWithDevToolsDevelopmentOnly } from '@redux-devtools/extension';
import logger from 'redux-logger'
import contactsReducer from './reducers/contactsReducer';

const middleware = applyMiddleware(logger);
export default createStore(contactsReducer, composeWithDevToolsDevelopmentOnly(middleware));

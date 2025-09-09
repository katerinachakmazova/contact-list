import { createStore, applyMiddleware } from 'redux';
import { composeWithDevToolsDevelopmentOnly } from '@redux-devtools/extension';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger'
import rootSaga  from '../sagas';
import contactsReducer from './reducers/contactsReducer';

const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware, logger);
export default createStore(contactsReducer, composeWithDevToolsDevelopmentOnly(middleware));

sagaMiddleware.run(rootSaga)
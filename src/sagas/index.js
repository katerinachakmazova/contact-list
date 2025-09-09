import { takeLatest, takeEvery } from 'redux-saga/effects';
import { ACTION_TYPES } from '../store/actions/actionTypes';
import {
  getContactsSaga,
  updateContactSaga,
  addContactSaga,
  deleteContactSaga,
} from './contactSagas';

 function* rootSaga() {
  yield takeLatest(ACTION_TYPES.GET_CONTACTS_ACTION, getContactsSaga)
  yield takeLatest(ACTION_TYPES.UPDATE_CONTACT_ACTION, updateContactSaga)
  yield takeLatest(ACTION_TYPES.ADD_CONTACT_ACTION, addContactSaga)
  yield takeEvery(ACTION_TYPES.DELETE_CONTACT_ACTION, deleteContactSaga)
}

export default rootSaga
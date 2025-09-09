import { put } from 'redux-saga/effects';
import {
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  updateContactRequest,
  updateContactSuccess,
  updateContactError,
} from '../store/actions/contactsActions';
import api from '../api/contacts-service';

export function* getContactsSaga() {
  yield put(getContactsRequest());
  try {
    const movies = yield api.get('/').then(({ data }) => data);
    yield put(getContactsSuccess(movies));
  } catch (error) {
    yield put(getContactsError(error));
  }
}

export function* deleteContactSaga({ payload }) {
  yield put(deleteContactRequest());
  try {
    yield api.delete(`/${payload}`);
    yield put(deleteContactSuccess(payload));
  } catch (error) {
    yield put(deleteContactError(error));
  }
}

export function* addContactSaga({ payload }) {
  yield put(addContactRequest());
  try {
    const newMovie = yield api.post('/', payload).then(({ data }) => data);
    yield put(addContactSuccess(newMovie));
  } catch (error) {
    yield put(addContactError(error))
  }
}

export function* updateContactSaga({payload}) {
  yield put(updateContactRequest())
  try {
    const updatedMovie = yield api.put(`/${payload.id}`, payload).then(({data}) => data)
    yield put(updateContactSuccess(updatedMovie))
  } catch (error) {
    yield put(updateContactError(error))
  }
}

import { ACTION_TYPES } from './actionTypes';

// Getting
export function getContactsAction() {
  return {
    type: ACTION_TYPES.GET_CONTACTS_ACTION,
  };
}
export function getContactsRequest() {
  return {
    type: ACTION_TYPES.GET_CONTACTS_REQUEST,
  };
}
export function getContactsSuccess(movies) {
  return {
    type: ACTION_TYPES.GET_CONTACTS_SUCCESS,
    payload: movies,
  };
}
export function getContactsError(error) {
  return {
    type: ACTION_TYPES.GET_CONTACTS_ERROR,
    payload: error,
  };
}

// Deleting
export function deleteContactAction(id) {
  return {
    type: ACTION_TYPES.DELETE_CONTACT_ACTION,
    payload: id,
  };
}
export function deleteContactRequest() {
  return {
    type: ACTION_TYPES.DELETE_CONTACT_REQUEST,
  };
}
export function deleteContactSuccess(id) {
  return {
    type: ACTION_TYPES.DELETE_CONTACT_SUCCESS,
    payload: id,
  };
}
export function deleteContactError(error) {
  return {
    type: ACTION_TYPES.DELETE_CONTACT_ERROR,
    payload: error,
  };
}

// Creating
export function addContactAction(contact) {
  return {
    type: ACTION_TYPES.ADD_CONTACT_ACTION,
    payload: contact,
  };
}
export function addContactRequest() {
  return {
    type: ACTION_TYPES.ADD_CONTACT_REQUEST,
  };
}
export function addContactSuccess(contact) {
  return {
    type: ACTION_TYPES.ADD_CONTACT_SUCCESS,
    payload: contact,
  };
}
export function addContactError(error) {
  return {
    type: ACTION_TYPES.ADD_CONTACT_ERROR,
    payload: error,
  };
}
// Updating
export function updateContactAction(contact) {
  return {
    type: ACTION_TYPES.UPDATE_CONTACT_ACTION,
    payload: contact,
  };
}
export function updateContactRequest() {
  return {
    type: ACTION_TYPES.UPDATE_CONTACT_REQUEST,
  };
}
export function updateContactSuccess(contact) {
  return {
    type: ACTION_TYPES.UPDATE_CONTACT_SUCCESS,
    payload: contact,
  };
}
export function updateContactError(error) {
  return {
    type: ACTION_TYPES.UPDATE_CONTACT_ERROR,
    payload: error,
  };
}
// don't use middleware
export function setCurrentContact(id) {
  return {
    type: ACTION_TYPES.SET_CURRENT_CONTACT,
    payload: id,
  };
}
export function clearCurrentContact() {
  return {
    type: ACTION_TYPES.CLEAR_CURRENT_CONTACT,
  };
}

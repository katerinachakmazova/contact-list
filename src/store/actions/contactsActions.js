import { ACTION_TYPES } from "./actionTypes"
export function getContacts(contacts){
  return {
    type: ACTION_TYPES.GET_CONTACTS,
    payload: contacts,
  }
}
export function deleteContact(id){
  return {
    type: ACTION_TYPES.DELETE_CONTACT,
    payload: id
  }
}
export function addContact (contact) {
    return {
    type: ACTION_TYPES.ADD_CONTACT,
    payload: contact
  }
}
export function updateContactContact (contact) {
    return {
    type: ACTION_TYPES.UPDATE_CONTACT,
    payload: contact
  }
}
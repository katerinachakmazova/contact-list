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
export function updateContact (contact) {
    return {
    type: ACTION_TYPES.UPDATE_CONTACT,
    payload: contact
  }
}
export function setCurrentContact(id){
  return {
    type: ACTION_TYPES.SET_CURRENT_CONTACT,
    payload: id,
  }
}
export function clearCurrentContact(){
  return{
    type: ACTION_TYPES.CLEAR_CURRENT_CONTACT
  }
}
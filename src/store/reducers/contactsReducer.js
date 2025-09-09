import { ACTION_TYPES } from '../actions/actionTypes';

const clearContact = () => {
  return {
    fName: '',
    lName: '',
    email: '',
    phone: '',
  };
};
const initialState = {
  contacts: [],
  currentContact: clearContact(),
  isFetching: false,
  error: null,
};
export default function contactsReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    // Request
    case ACTION_TYPES.GET_CONTACTS_REQUEST:
    case ACTION_TYPES.DELETE_CONTACT_REQUEST:
    case ACTION_TYPES.ADD_CONTACT_REQUEST:
    case ACTION_TYPES.UPDATE_CONTACT_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    // Success
    case ACTION_TYPES.GET_CONTACTS_SUCCESS:
      return {
        ...state,
        contacts: payload,
        isFetching: false,
        error: null,
      };
    case ACTION_TYPES.DELETE_CONTACT_SUCCESS:
      return {
        ...state,
        contacts: state.contacts.filter((contact) => contact.id !== payload),
        isFetching: false,
        error: null,
      };
    case ACTION_TYPES.ADD_CONTACT_SUCCESS:
      return {
        ...state,
        contacts: [...state.contacts, payload],
        isFetching: false,
        error: null,
      };
    case ACTION_TYPES.UPDATE_CONTACT_SUCCESS:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === payload.id ? payload : contact
        ),
        isFetching: false,
        error: null,
      };
    // Errors
    case ACTION_TYPES.GET_CONTACTS_ERROR:
    case ACTION_TYPES.DELETE_CONTACT_ERROR:
    case ACTION_TYPES.ADD_CONTACT_ERROR:
    case ACTION_TYPES.UPDATE_CONTACT_ERROR:
      return {
        ...state,
        error: payload,
        isFetching: false,
      };
    // not using middleware
    case ACTION_TYPES.SET_CURRENT_CONTACT:
      return {
        ...state,
        currentContact: {
          ...state.contacts.find((contact) => contact.id === payload),
        },
      };
    case ACTION_TYPES.CLEAR_CURRENT_CONTACT:
      return {
        ...state,
        currentContact: clearContact(),
      };
    default:
      return state;
  }
}

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/contacts-service';
import { CONTACT_SLICE_NAME } from '../../constants/constants';

const initialState = {
  contacts: [],
  currentContact: clearContact(),
  isPending: false,
  error: null,
};

function clearContact() {
  return {
    fName: '',
    lName: '',
    email: '',
    phone: '',
  };
}
function checkStatus(response, actionType) {
  if (response.status >= 400) {
    throw new Error(
      `Something went wrong with ${actionType}. Error status is ${response.status}`
    );
  }
}
export const getContacts = createAsyncThunk(
  `${CONTACT_SLICE_NAME}/getContacts`,
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(`/${CONTACT_SLICE_NAME}`);
      checkStatus(response, 'getting');
      const { data } = response;
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const addContact = createAsyncThunk(
  `${CONTACT_SLICE_NAME}/addContact`,
  async (contact, { rejectWithValue, dispatch }) => {
    try {
      const response = await api.post(`/${CONTACT_SLICE_NAME}`, contact);
      checkStatus(response, 'adding');
      const { data } = response;
      dispatch(createContact(data));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  `${CONTACT_SLICE_NAME}/deleteContact`,
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const response = await api.delete(`/${CONTACT_SLICE_NAME}/${id}`);
      checkStatus(response, 'deleting');
      dispatch(removeContact(id));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const updateContact = createAsyncThunk(
  `${CONTACT_SLICE_NAME}/updateContact`,
  async (contact, { rejectWithValue, dispatch }) => {
    try {
      const response = await api.put(
        `/${CONTACT_SLICE_NAME}/${contact.id}`,
        contact
      );
      checkStatus(response, 'updating');
      const {data} = response;
      dispatch(changeContact(data));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
function setPending(state) {
  state.isPending = true;
  state.error = null;
}
function setError(state, { payload }) {
  state.isPending = false;
  state.error = payload;
}
const contactsSlice = createSlice({
  name: CONTACT_SLICE_NAME,
  initialState,
  reducers: {
    createContact(state, { payload }) {
      state.contacts.push(payload);
    },
    removeContact(state, { payload }) {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== payload
      );
    },
    changeContact(state, { payload }) {
      state.contacts = state.contacts.map((contact) =>
        contact.id === payload.id ? payload : contact
      );
    },
    setCurrentContact(state, { payload }) {
      state.currentContact = payload;
    },
    clearCurrentContact(state, { payload }) {
      state.currentContact = clearContact();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getContacts.fulfilled, (state, { payload }) => {
      state.contacts = payload;
      state.isPending = false;
      state.error = null;
    });
    builder.addCase(getContacts.pending, setPending);
    builder.addCase(getContacts.rejected, setError);
    builder.addCase(addContact.pending, setPending);
    builder.addCase(addContact.rejected, setError);
    builder.addCase(deleteContact.pending, setPending);
    builder.addCase(deleteContact.rejected, setError);
    builder.addCase(updateContact.pending, setPending);
    builder.addCase(updateContact.rejected, setError);
  },
});
const { actions, reducer } = contactsSlice;
const { createContact, changeContact, removeContact } = actions;
export const { setCurrentContact, clearCurrentContact } = actions;
export default reducer;

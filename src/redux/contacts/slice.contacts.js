import { createSlice } from '@reduxjs/toolkit';
// import { getContacts } from '../../components/ContactList';

export const initialState = {
  items: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    deleteContactsAction: (state, action) => {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
    addContactsAction: (state, action) => {
      console.log(action.payload);
      state.items.push(action.payload);
    },
  },
});

export const { deleteContactsAction, addContactsAction } =
  contactsSlice.actions;

export default contactsSlice.reducer;

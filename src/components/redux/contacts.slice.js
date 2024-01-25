import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',

  initialState: [],

  reducers: {
    addContacts: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(contact) {
        return {
          payload: {
            ...contact,
            id: nanoid(),
          },
        };
      },
    },
    deleteContacts(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export const { addContacts, deleteContacts } = contactsSlice.actions;

export const contactsSliceReducer = contactsSlice.reducer;

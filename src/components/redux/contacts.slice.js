const { createSlice, nanoid } = require('@reduxjs/toolkit');

const contactsSlice = createSlice({
  name: 'contacts',

  initialState: [
    // { id: 0, name: 'Learn HTML and CSS', number: '12345' },
    // { id: 1, name: 'Get good at JavaScript', number: '12345' },
    // { id: 2, name: 'Master React', number: '12345' },
    // { id: 3, name: 'Discover Redux', number: '12345' },
    // { id: 4, name: 'Build amazing apps', number: '12345' },
  ],

  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            text,
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

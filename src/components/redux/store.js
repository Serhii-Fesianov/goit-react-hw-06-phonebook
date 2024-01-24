import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { contactsSliceReducer } from './contacts.slice';
import { filterReducer } from './filter.slice';

const rootReducer = combineReducers({
  contacts: contactsSliceReducer,
  filter: filterReducer,
});

export const store = configureStore({ reducer: rootReducer });

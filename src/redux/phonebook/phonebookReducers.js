import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import * as types from './phonebookTypes';
import * as localStorage from '../../services/localStorage';

const getInitialState = () => {
  const contactsFromLocalStorage = localStorage.getContacts();

  return contactsFromLocalStorage === undefined ? [] : contactsFromLocalStorage;
};

const contactsReducer = createReducer(getInitialState(), {
  [types.ADD_CONTACT]: (state, action) => [...state, action.payload.contact],

  [types.DELETE_CONTACT]: (state, action) =>
    state.filter(contact => contact.id !== action.payload.id),
});

const filterReducer = createReducer('', {
  [types.CHANGE_FILTER]: (state, action) => action.payload.value,
});

export default combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

// Without Redux Toolkit

// import { combineReducers } from 'redux';
// import types from './phonebookTypes';
// import * as localStorage from '../../services/localStorage';

// const getInitialState = () => {
//   const contactsFromLocalStorage = localStorage.getContacts();

//   const initialState =
//     contactsFromLocalStorage === undefined ? [] : contactsFromLocalStorage;

//   return initialState;
// };

// const contactsReducer = (state = getInitialState(), { type, payload }) => {
//   switch (type) {
//     case types.ADD_CONTACT:
//       return [...state, payload.contact];

//     case types.DELETE_CONTACT:
//       return state.filter(contact => contact.id !== payload.id);

//     default:
//       return state;
//   }
// };

// const filterReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.CHANGE_FILTER:
//       return payload.value;

//     default:
//       return state;
//   }
// };

// export default combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });

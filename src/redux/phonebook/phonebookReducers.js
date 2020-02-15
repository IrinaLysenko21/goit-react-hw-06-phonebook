import { combineReducers } from 'redux';
import types from './phonebookTypes';
import * as localStorage from '../../services/localStorage';

const getInitialState = () => {
  const contactsFromLocalStorage = localStorage.getContacts();

  const initialState =
    contactsFromLocalStorage === undefined ? [] : contactsFromLocalStorage;

  return initialState;
};

const contactsReducer = (state = getInitialState(), { type, payload }) => {
  switch (type) {
    case types.ADD_CONTACT:
      return [...state, payload.contact];

    case types.DELETE_CONTACT:
      return state.filter(contact => contact.id !== payload.id);

    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload.value;

    default:
      return state;
  }
};

export default combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

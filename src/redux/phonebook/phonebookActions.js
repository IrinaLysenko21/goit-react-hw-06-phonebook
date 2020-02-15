import types from './phonebookTypes';

export const addContact = contact => ({
  type: types.ADD_CONTACT,
  payload: {
    contact,
  },
});

export const deleteContact = id => ({
  type: types.DELETE_CONTACT,
  payload: {
    id,
  },
});

export const changeFilter = value => ({
  type: types.CHANGE_FILTER,
  payload: {
    value,
  },
});

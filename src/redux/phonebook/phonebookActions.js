import { createAction } from '@reduxjs/toolkit';
import * as types from './phonebookTypes';

export const addContact = createAction(types.ADD_CONTACT);
export const deleteContact = createAction(types.DELETE_CONTACT);
export const changeFilter = createAction(types.CHANGE_FILTER);

// Without Redux Toolkit

// import types from './phonebookTypes';

// export const addContact = contact => ({
//   type: types.ADD_CONTACT,
//   payload: {
//     contact,
//   },
// });

// export const deleteContact = id => ({
//   type: types.DELETE_CONTACT,
//   payload: {
//     id,
//   },
// });

// export const changeFilter = value => ({
//   type: types.CHANGE_FILTER,
//   payload: {
//     value,
//   },
// });

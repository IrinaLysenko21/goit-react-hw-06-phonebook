import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;

// Without Redux Toolkit

// import { createStore, combineReducers } from 'redux';
// import { devToolsEnhancer } from 'redux-devtools-extension';
// import phonebookReducer from './phonebook/phonebookReducers';

// const rootReducer = combineReducers({
//   phonebook: phonebookReducer,
// });

// const store = createStore(rootReducer, devToolsEnhancer());

// export default store;

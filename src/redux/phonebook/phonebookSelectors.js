import { createSelector } from 'reselect';

export const getContacts = store => store.phonebook.contacts;

export const getContactsLength = store => store.phonebook.contacts.length;

export const getFilterValue = store => store.phonebook.filter;

export const getFilteredContacts = createSelector(
  [getContacts, getFilterValue],
  (contacts, filterValue) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase()),
    ),
);

// Without createSelector

// export const getFilteredContacts = store => {
//   const contacts = getContacts(store);
//   const filterValue = getFilterValue(store);
//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filterValue.toLowerCase()),
//   );
// };

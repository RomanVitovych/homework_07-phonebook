import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.contacts.loading;

const getAlert = state => state.contacts.alert;

const getContactsBook = state => state.contacts.contactsBook;

const getNextName = state => state.contacts.nextName;

const getNextNumber = state => state.contacts.nextNumber;

const getFilter = state => state.contacts.filters;

// const getVisibleContacts = state => {
//     const contacts = getContactsBook(state);
//     const filters = getFilter(state).toLowerCase();

//     return contacts.filter(contact => 
//         contact.name.toLowerCase().includes(filters));
// };

// мемеоізація
const getVisibleContacts = createSelector(
    [getContactsBook, getFilter], (contacts, filters) => {
    return contacts.filter(contact => 
                contact.name.toLowerCase().includes(filters));
    },
);

export default {
    getLoading,
    getAlert,
    getContactsBook,
    getNextName,
    getNextNumber,
    getFilter,
    getVisibleContacts,
};
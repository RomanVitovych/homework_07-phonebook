import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './Contacts/contactsReducer';

const store = configureStore({
    reducer: {
        contacts: contactsReducer,
    },
});

export default store;
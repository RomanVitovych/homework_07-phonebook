import { createAction } from '@reduxjs/toolkit';

const addContactRequest = createAction('contacts/addRequest');
const addContactSuccess = createAction('contacts/addSuccess');
const addContactError = createAction('contacts/addError');

const fetchContactsRequest = createAction('contacts/fetchRequest');
const fetchContactsSuccess = createAction('contacts/fetchSuccess');
const fetchContactsError = createAction('contacts/fetchError');

const alertStatusRequest = createAction('contacts/alertRequest');
const alertStatusSuccess = createAction('contacts/alertSuccess');
const alertStatusError = createAction('contacts/alertError');

const removeContactRequest = createAction('contacts/removeRequest');
const removeContactSuccess = createAction('contacts/removeSuccess');
const removeContactError = createAction('contacts/removeError');

const changeFilter = createAction('contacts/changeFilter');

const changeName = createAction('contacts/changeName');

const changeNumber = createAction('contacts/changeNumber');


export default {
    addContactRequest,
    addContactSuccess,
    addContactError,
    fetchContactsRequest,
    fetchContactsSuccess,
    fetchContactsError,
    alertStatusRequest,
    alertStatusSuccess,
    alertStatusError,
    removeContactRequest,
    removeContactSuccess,
    removeContactError,
    changeFilter,
    changeName,
    changeNumber,
};
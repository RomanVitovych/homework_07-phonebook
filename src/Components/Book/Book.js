import React from 'react';
import ContactsForm from '../ContactsForm/ContactsForm';
import ContactsList from '../ContactsList/ContactsList';
import Filter from '../Fllter/Filter';
import AlertMessage from '../AlertMessage/AlertMessage';
import Load from '../Load/Load';


const Book = ({isLoadingContacts}) => {
        return (
            <>
                {isLoadingContacts && <Load />}
                <AlertMessage />
                <ContactsForm />
                <Filter />
                <ContactsList />
            </>
        );
};

export default Book;
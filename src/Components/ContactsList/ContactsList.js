import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ContactsListItem from '../ContactsListItem/ContactsListItem';
import contactsOperations from '../../redux/Contacts/contactsOperations';
import styles from './ContactsList.module.css';

const ContactsList = ({contacts, onRemoveContact}) => {
    return (
        <TransitionGroup 
        component='ul' 
        className={styles.contactsList} >
                {contacts.map(({name, id, number}) => 
                <CSSTransition 
                key={id}
                timeout={250}
                classNames={styles} >
                    <ContactsListItem
                    name={name}                   
                    number={number}
                    onRemove={() => onRemoveContact(id)} />
                </CSSTransition>
                )}
        </TransitionGroup>
    );
};

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.exact({
        name: PropTypes.string,
        id: PropTypes.string,
        number: PropTypes.string,
    }))
};

const mapStateToProps = (state) => {
    const {contactsBook, filters} = state.contacts;
    const visibleContacts = contactsBook.filter(contact => 
        contact.name.toLowerCase().includes(filters.toLowerCase()),
        );

        return {
            contacts: visibleContacts,
        };
};

const mapDispatchToProps = {
    onRemoveContact: contactsOperations.removeContact,
};

export default connect(
    mapStateToProps, 
    mapDispatchToProps)
    (ContactsList);
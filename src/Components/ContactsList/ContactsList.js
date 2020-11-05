import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import ContactsListItem from '../ContactsListItem/ContactsListItem';
import contactsOperations from '../../redux/Contacts/contactsOperations';
import contactsSelectors from '../../redux/Contacts/contactsSelectors';
import styles from './ContactsList.module.css';

const ContactsList = ({contacts, onRemoveContact}) => {
    return (
        <>
        {contacts.length > 0
        ? <TransitionGroup 
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
        : <h2>None contact!</h2>}
        </>
    );
};

const mapStateToProps = (state) => ({
    contacts: contactsSelectors.getVisibleContacts(state),
});

const mapDispatchToProps = {
    onRemoveContact: contactsOperations.removeContact,
};

export default connect(
    mapStateToProps, 
    mapDispatchToProps)
    (ContactsList);
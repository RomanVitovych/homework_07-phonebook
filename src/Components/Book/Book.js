import React, { Component }from 'react';
import { connect } from 'react-redux';
import ContactsForm from '../ContactsForm/ContactsForm';
import ContactsList from '../ContactsList/ContactsList';
import Filter from '../Fllter/Filter';
import AlertMessage from '../AlertMessage/AlertMessage';
import Load from '../Load/Load';
import contactsOperations from '../../redux/Contacts/contactsOperations';

class Book extends Component {
    componentDidMount() {
        this.props.onFetchContacts();
    };
    
    render() {
        return (
            <>
                {this.props.isLoadingContacts && <Load />}
                <AlertMessage />
                <ContactsForm />
                <Filter />
                <ContactsList />
            </>
        );
    };
};

const mapStateToProps = (state) => ({
    isLoadingContacts: state.contacts.loading,
});

const mapDispatchToProps = {
    onFetchContacts: contactsOperations.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Book);
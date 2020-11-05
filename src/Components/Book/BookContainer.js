import React, { Component } from 'react';
import { connect } from 'react-redux';
import Book from './Book';
import contactsOperations from '../../redux/Contacts/contactsOperations';
import contactsSelectors from '../../redux/Contacts/contactsSelectors';

class BookContainer extends Component {
    componentDidMount() {
        this.props.onFetchContacts();
    };

    render() {
        return (
            <>
                <Book {...this.props} />
            </>
        );
    }
};

const mapStateToProps = (state) => ({
    isLoadingContacts: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = {
    onFetchContacts: contactsOperations.fetchContacts,
};


export default connect(mapStateToProps, mapDispatchToProps)(BookContainer);
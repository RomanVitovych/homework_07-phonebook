import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import contactsAction from '../../redux/Contacts/contactsActions';
import styles from './Filter.module.css';

const Filter = ({value, onChangeFilter}) => {
    return (
        <div className={styles.filterForm} >
            <p className={styles.filterTitle} >
                Find contacts by name
            </p>
            <input
            className={styles.filterInput}
            placeholder=''
            type='text'
            value={value}
            onChange={e => onChangeFilter(e.target.value)} />
        </div>
    );
};

Filter.propTypes = {
    value: PropTypes.string,
    onChangeFilter: PropTypes.func,
};

const mapStateToProps = (state) => ({
    value: state.contacts.filters,
});

const mapDispatchToProps = {
    onChangeFilter: contactsAction.changeFilter,
};

export default connect(
    mapStateToProps, 
    mapDispatchToProps)
    (Filter);
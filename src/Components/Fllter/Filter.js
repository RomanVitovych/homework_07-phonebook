import React from 'react';
import { connect } from 'react-redux';
import contactsAction from '../../redux/Contacts/contactsActions';
import contactsSelectors from '../../redux/Contacts/contactsSelectors';
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

const mapStateToProps = (state) => ({
    value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = {
    onChangeFilter: contactsAction.changeFilter,
};

export default connect(
    mapStateToProps, 
    mapDispatchToProps)
    (Filter);
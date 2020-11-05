import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import styles from './AlertMessage.module.css';
import contactsSelectors from '../../redux/Contacts/contactsSelectors';


const AlertMessage = ({alert}) => {
    return (
            <CSSTransition
            in={alert}           
            timeout={500}
            classNames={styles}
            unmountOnExit >
                <div className={styles.alert} >
                    <p>Contact already exists!</p>
                </div>
            </CSSTransition>
    );
};

const mapStateToProps = (state) => ({
    alert: contactsSelectors.getAlert(state),
});

export default connect(mapStateToProps, null)(AlertMessage);
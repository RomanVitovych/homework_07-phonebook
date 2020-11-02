import React from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './Header.module.css';

const Header = () => {
    return (
        <CSSTransition
        in={true}
        appear={true}
        timeout={500}
        classNames={styles}
        unmountOnExit >
            <header>
                <h1 className={styles.mainTitle} >
                Phonebook
                </h1>                      
            </header>
        </CSSTransition>
    );
};

export default Header;
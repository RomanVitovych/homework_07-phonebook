import React from 'react';
import Header from '../Header/Header';
import styles from './Layout.module.css';

const Layout = ({children}) => {
    return (
        <div className={styles.layoutMain} >
            <Header/>
            <hr className={styles.line} />
            {children}
            <hr className={styles.line} />
        </div>
    );
};

export default Layout;
import React from 'react';
import styles from './NavBar.module.css';


import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <div className={styles.container}>
            <Link to="/">Home</Link>{(' || ')}
            <Link to="products">Products</Link>
        </div>
    )
}

import React from 'react';
import styles from './NavBar.module.css';
import { Grid, Typography } from '@material-ui/core';


import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
            <Grid container className={styles.container}>
                <Grid item xs={12} md={6} className={styles.gridLeft}>
                    <Typography variant="h5" className={styles.h5}>SHOE STORE</Typography>
                </Grid>
                <Grid item xs={12} md={6} className={styles.gridRight}>
                    <Link to="/" className={styles.link}>Home</Link>
                    <Link to="launch" className={styles.link}>Launch</Link>
                </Grid>
            </Grid>
    )
}

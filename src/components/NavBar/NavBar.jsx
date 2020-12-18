import React from 'react';
import styles from './NavBar.module.css';
import { Grid, Typography } from '@material-ui/core';


import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <div className={styles.container}>
            <Grid container>
                <Grid item xs={12} md={6} className={styles.gridItem}>
                    <Typography variant="h5" color="primary">SHOE STORE</Typography>
                </Grid>
                <Grid item xs={12} md={6} className={styles.gridItem}>
                    <Link to="/">Home</Link>{(' || ')}
                    <Link to="launch">Launch</Link>
                </Grid>
            </Grid>
        </div>
    )
}

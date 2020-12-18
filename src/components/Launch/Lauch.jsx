import React from 'react';
import Shoes from '../../shoes.json';
import { Link } from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core';
import styles from './Launch.module.css';

export const Launch = () => {
    return (
        <div>
            <Typography variant="h2" className={styles.h2}>New Launch</Typography>
            <Grid container>
                {Object.keys(Shoes).map((item) => {
                    const shoe = Shoes[item];
                    return (
                        <Grid item xs={12} md={4} className={styles.gridItem}>
                            <Link to={`/launch/${item}`} className={styles.link}>
                                <img src={shoe.img} alt={shoe} height={250} />
                                <h2 key={item}>{shoe.name}</h2>
                            </Link>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}

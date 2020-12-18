import React from 'react';
import Shoes from './../../shoes.json';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

import { Grid } from '@material-ui/core';

export const Home = () => {

    console.log("Home =>", Shoes);
    return (
        <div>
            <Grid container>
                {Object.keys(Shoes).map((item) => {
                    const shoe = Shoes[item];
                    return (
                        <Grid item xs={12} md={4} className={styles.gridItem}>
                            <div>
                                <Link to={`/launch/${item}`} className={styles.link}>
                                    <img src={shoe.img} alt={item} className={styles.img} />
                                    <h2 key={item}>{shoe.name}</h2>
                                </Link>
                            </div>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}

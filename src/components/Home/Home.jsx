import React from 'react';
import Shoes from './../../shoes.json';
import styles from './Home.module.css';

import { Grid } from '@material-ui/core';

export const Home = () => {

    console.log("Home =>", Shoes);
    return (
        <div>
            <Grid container>
                {Object.keys(Shoes).map((item, ind) => {
                    return (
                        <Grid item md={4} className={styles.gridItem}>
                            <div>
                                <img src={Shoes[item].img} alt={item} className={styles.img}/>
                                {Shoes[item].name}
                            </div>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}
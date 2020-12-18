import React from 'react';
import { useParams } from 'react-router-dom';
import Shoes from '../../shoes.json';
import { Grid, Typography } from '@material-ui/core';
import styles from './Item.module.css';

export const ProductItem = () => {

    const { id } = useParams();
    const shoe = Shoes[id];
    if (!shoe) {
        return <h1>Product Not Found!</h1>
    }
    console.log("Shoe =>", shoe);

    return (
        <div>
            <h1>Product Item</h1>
            <Grid container>
                <Grid item md={6} className={styles.grid}>
                    <div>
                        <img src={shoe.img} alt={shoe} width={"100%"} height={400} />
                    </div>
                </Grid>
                <Grid item md={6} className={styles.grid}>
                    <div>
                        <Typography variant="h5">
                            <h2>{shoe.name}</h2>
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
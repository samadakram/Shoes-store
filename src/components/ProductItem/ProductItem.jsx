import React from 'react';
import { useParams } from 'react-router-dom';
import Shoes from '../../shoes.json';
import { Grid } from '@material-ui/core';

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
                <Grid item md={6}>
                    <div>
                        <img src={shoe.img} alt={shoe} width={"100%"} height={400} />
                    </div>
                </Grid>
                <Grid item md={6}>
                    <div>
                        <h2>{shoe.name}</h2>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
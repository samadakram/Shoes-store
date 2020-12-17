import React from 'react';
import Shoes from '../../shoes.json';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';

export const Launch = () => {

    console.log("Shoes =>", Shoes);
    return (
        <div>
            <h1>Products</h1>
            <Grid container>
                {Object.keys(Shoes).map((item, ind) => {
                    const shoe = Shoes[item];
                    return (
                        <Grid item md={4}>
                            <Link to={`products/${item}`}>
                                <img src={shoe.img} alt={shoe} height={250} />
                                <h2 key={ind}>{shoe.name}</h2>
                            </Link>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}

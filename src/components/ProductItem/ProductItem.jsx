import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Shoes from '../../shoes.json';
import { Grid, Typography, InputLabel, FormControl, NativeSelect } from '@material-ui/core';
import styles from './Item.module.css';

export const ProductItem = () => {

  const [state, setState] = useState({
    age: '',
    name: 'hai',
  }); // Material Ui

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const { id } = useParams();
  const shoe = Shoes[id];
  if (!shoe) {
    return <h1>Product Not Found!</h1>
  }

  return (
    <div>
      <h1>Product Item</h1>
      <Grid container>
        <Grid item xs={12} md={6} className={styles.grid}>
          <div>
            <img src={shoe.img} alt={shoe} width={"100%"} height={400} />
          </div>
        </Grid>
        <Grid item xs={12} md={6} className={styles.grid}>
          <div>
            <Typography variant="h5">
              <h2>{shoe.name}</h2>
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              BRAND: Studio Footwear
                        </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Product Code: geet-fone-320009
                        </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Availability: In Stock
                        </Typography>
            <Typography variant="h6" gutterBottom>
              Available Options
                        </Typography>
            <FormControl className={styles.formControl}>
              <InputLabel shrink htmlFor="age-native-label-placeholder">
                Size
        </InputLabel>
              <NativeSelect
                className={styles.select}
                value={state.age}
                onChange={handleChange}
                inputProps={{
                  name: 'age',
                  id: 'age-native-label-placeholder',
                }}
              >
                <option value="">---Please Select---</option>
                <option value={6}>PK 6 - EU 36</option>
                <option value={7}>PK 7 - EU 37</option>
                <option value={8}>PK 8 - EU 38</option>
                <option value={9}>PK 9 - EU 39</option>
                <option value={10}>PK 10 - EU 40</option>
                <option value={11}>PK 11 - EU 41</option>
                <option value={12}>PK 12 - EU 42</option>
              </NativeSelect>
            </FormControl>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}
import React from 'react';
import { useParams } from 'react-router-dom';
import Shoes from '../../shoes.json';

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
            <div>
                <img src={shoe.img} alt={shoe} height={250} />
                <h2>{shoe.name}</h2>
            </div>
        </div>
    )
}
import React from 'react';
import Shoes from '../../shoes.json';
import { Link } from 'react-router-dom';

export const Launch = () => {

    console.log("Shoes =>", Shoes);
    return (
        <div>
            <h1>Products</h1>
            {Object.keys(Shoes).map((keyName) => {
                const shoe = Shoes[keyName];
                return (<Link to={`products/${keyName}`}>
                    <img src={shoe.img} alt={shoe} height={250} />
                    <h2 key={keyName}>{shoe.name}</h2>
                </Link>)
            })}
        </div>
    )
}

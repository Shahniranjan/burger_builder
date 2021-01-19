import React from "react";
import classes from "../Order/Order.css"
const Order = (props) => {
    const {customer, deliveryMethod, ingre, price} = props.orderInfo;
    const ingredients = [];

    for ( let ingredientName in ingre ) {
        ingredients.push(
            {
                name: ingredientName,
                amount: ingre[ingredientName]
            }
        );
    }
    const ingredientOutput = ingredients.map(ig => {
        return <span
            style={{
                textTransform: 'capitalize',
                display: 'inline-block',
                margin: '0 8px',
                border: '1px solid #ccc',
                padding: '5px'
            }}
            key={ig.name}>{ig.name} ({ig.amount})</span>;
    });

    return(
        <div>
            <div className={classes.Order}>
                <p>Ingredients: {ingredientOutput}</p>
                <p>Price: <strong>USD {Number.parseFloat( price ).toFixed( 2 )}</strong></p>
            </div>
        </div>

    );
};

export default Order;
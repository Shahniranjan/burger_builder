import React from "react";

const OrderSummary = (props) => {
    const ingredients = Object.keys(props.ingredients)
        .map((igkey) => {
            return <li key={igkey}>{igkey}: {props.ingredients[igkey]}</li>
        });

    return (
        <div>
            <p>This are the ingredients</p>
            <ul>
                {ingredients}
            </ul>
            <p>Proceed to Checkout?</p>
        </div>
    );
};

export default OrderSummary;
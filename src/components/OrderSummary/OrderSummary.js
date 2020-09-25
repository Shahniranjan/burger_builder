import React from "react";
import Button from "../UI/Button/Button";

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
            <p><strong>Total Price : ${props.totalPrice}</strong></p>
            <p>Proceed to Checkout?</p>
            <Button type="Danger" click={props.canclePurchase}>CANCEL</Button>
            <Button type="Success" click={props.continuePurchase}>CONTINUE</Button>
        </div>
    );
};

export default OrderSummary;
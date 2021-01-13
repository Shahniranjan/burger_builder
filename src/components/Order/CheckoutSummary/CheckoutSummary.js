import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import Class from "../CheckoutSummary/CheckoutSummary.css";

const CheckoutSummary = (props) => {
    return (
        <div className={Class.CheckoutSummary}>
            <h1>Hope you like our product</h1>
            <div style={{width:"100%",margin:"auto"}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button click={props.checkoutCancelled} type="Danger">Cancel</Button>
            <Button click={props.checkoutContinued} type="Success">Success</Button>
        </div>
    )

};

export default CheckoutSummary;
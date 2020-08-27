import React from "react";
import BuilderControl from "./BuilderControl/BuilderControl";
import classes from './BuilderControls.css';


const Controls = [
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Salad', type: 'salad'},
];

function BuilderControls(props) {
    return (
        <div className={classes.BuildControls}>
            <p>Current Price : {props.totalprice.toFixed(2)}</p>
            {Controls
                .map((control) => {
                    return <BuilderControl
                        key={control.label}
                        label={control.label}
                        addIngredient={() => props.addIngredient(control.type)}
                        removeIngredient={() => props.removeIngredient(control.type)}
                        disabledInfo={props.disabledInfo[control.type]}
                    />
                })}
            <button className={classes.OrderButton} disabled={!props.purchasable} onClick={props.purchasingHandler}>Order Now</button>
        </div>
    );
}

export default BuilderControls;
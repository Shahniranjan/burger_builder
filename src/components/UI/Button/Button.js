import React from "react";
import Classes from "./Button.css";

const Button = (props) => {
    return (
        <button
            className={[Classes.Button, Classes[props.type]].join(' ')}
            onClick={props.click}>
            {props.children}
        </button>
    )
};

export default Button;
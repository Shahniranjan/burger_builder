import React, {Fragment} from "react";
import Classes from "./Model.css";
import Backdrop from "../Backdrop/Backdrop";


const Model = (props) => (
    <Fragment>
        <Backdrop show={props.show} close={props.close}/>
        <div className={Classes.Modal} style={{
            transform: props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: props.show ? "1" : "0"
        }}>
            {props.children}
        </div>
    </Fragment>
);

export default Model;
import React from "react";
import Classes from "./Backdrop.css";

const Backdrop = (props) => (props.show ? <div className={Classes.Backdrop} onClick={props.close}/> : null);

export default Backdrop;
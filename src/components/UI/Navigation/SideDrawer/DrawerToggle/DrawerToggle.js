import React from "react";
import Classes from './DrawerToggle.css';

const DrawerToggle = (props)=>{
    return  <div className={Classes.DrawerToggle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>   
    </div>
};

export default DrawerToggle;
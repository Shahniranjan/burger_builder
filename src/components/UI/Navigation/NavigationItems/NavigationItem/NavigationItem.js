import React from "react";
import Classes from "../NavigationItem/NavigationItem.css"
const NavigationItem = (props)=>(
 <li className={Classes.NavigationItem}>
     <a href={props.link} className={props.active ? Classes.active : null}>{props.children}</a>
 </li>
);

export default NavigationItem;
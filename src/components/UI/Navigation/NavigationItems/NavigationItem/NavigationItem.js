import React from "react";
import Classes from "../NavigationItem/NavigationItem.css"
import {NavLink} from "react-router-dom";
const NavigationItem = (props)=>(
 <li className={Classes.NavigationItem}>
     <NavLink to={props.link} activeClassName={Classes.active}>{props.children}</NavLink>
 </li>
);

export default NavigationItem;
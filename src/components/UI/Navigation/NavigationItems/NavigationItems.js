import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import Classes from "./NavigationItems.css"
const NavigationItems = () => (
    <ul className={Classes.NavigationItems}>
        <NavigationItem link="/" active>Home</NavigationItem>
        <NavigationItem link="/checkout">CheckOut</NavigationItem>
    </ul>
);

export default NavigationItems;
import React from "react";
import LogoImage from "../../assets/images/burger-logo.png";
import Classes from "../Logo/Logo.css";

const Logo = () => {
    return (
        <div className={Classes.Logo}>
            <img src={LogoImage} alt="Logo"/>
        </div>
    )
};
export default Logo;
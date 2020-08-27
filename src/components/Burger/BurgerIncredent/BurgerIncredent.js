import React from 'react';
import Class from './incredent.css';

const BurgerIncredent = (props) => {
    let incredent = null;

    switch (props.type) {
        case ('bread-bottom'):
            incredent = <div className={Class.BreadBottom}/>;
            break;

        case ('bread-top'):
            incredent = <div className={Class.BreadTop}>
                <div className={Class.Seeds1}/>
                <div className={Class.Seeds2}/>
            </div>;
            break;
        case ('salad'):
            incredent = <div className={Class.Salad}/>;
            break;
        case ('meat'):
            incredent = <div className={Class.Meat}/>;
            break;
        case ('cheese'):
            incredent = <div className={Class.Cheese}/>;
            break;
        case ('bacon'):
            incredent = <div className={Class.Bacon}/>;
            break;
    }

    return incredent;
};
export default BurgerIncredent;
/**
 * let
 * state={
 * ingredients {
 *   cheese:2 ,
 *   bacon :5 ,
 *   meat  :3}
 *   }
 *
 * Object.keys(props.ingredients) le keys haru lai array ma rakhxa [cheese,bacon,meat]
 * Object.keys(props.ingredients).map(keys=>{return keys}) le each key return garxa cheese,bacon,meat
 * Object.keys(props.ingredients).map(keys=>{return [...Array[props.ingredients[keys]]]}) le empty array dinxa
 * eg. [...Array[bacon]] = [ , , , , ]
 * aba hamilai index matra chainxa , empty value kam xaina
 * Object.keys(props.ingredients)
 * .map(keys=>{return [...Array[props.ingredients[keys]]].map( (emptydata,index){
 *     return index; // cheese 2 xa bhane 0,1 bacon 5 xa bhane 0 1 2 3 4
 * })
 * })
 */


import React from 'react';
import BurgerIncredent from './BurgerIncredent/BurgerIncredent';
import Class from './Burger.css';

const burger = (props) => {
console.log(props.ingredients);
    let transformedIncredients =
        Object.keys(props.ingredients)
            .map((keys) => {
                return [...Array(props.ingredients[keys])]
                    .map((empty, i) => {
                        return <BurgerIncredent key={keys + i} type={keys}/>
                    })
            }).reduce((arr, ele) => {
            return arr.concat(ele)
        }, []);

    if (transformedIncredients.length === 0) {
        transformedIncredients = <p>Please start adding ingredients!</p>
    }

    return (
        <div className={Class.Burger}>
            <BurgerIncredent type="bread-top"/>
            {transformedIncredients}
            <BurgerIncredent type="bread-bottom"/>
        </div>
    )

};


export default burger;



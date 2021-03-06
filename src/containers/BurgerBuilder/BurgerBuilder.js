import React, {Component, Fragment} from "react";

import Burger from "../../components/Burger/Burger";
import BuilderControls from "../../components/Burger/BuilderControls/BuilderControls";
import Model from "../../components/UI/Model/Model";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-order";
import Spinner from "../../components/UI/Spinner/Spinner";
import WithErrorHandler from "../../hoc/WithErrorHandler/WithErrorHandler";


const INGREDIENTCOST = {
    cheese: 1,
    bacon: 2,
    meat: 2.5,
    salad: 1.25
};

class BurgerBuilder extends Component {
    state = {
        ingredients: null,
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false,
        error: false
    };

    componentDidMount() {
        axios.get('/ingredients.json')
            .then(response => {
                this.setState(prev => ({ingredients: response.data}))
            }).catch(error => {
            return this.setState(prev => ({error: true}))
        })
    }

    updatePurchasable = () => {
        let ingredients = {...this.state.ingredients};
        let sum = Object.keys(ingredients).map(igkeys => {
            return ingredients[igkeys];
        }).reduce((sum, element) => {
            return sum + element
        }, 0);
        this.setState(prevState => ({
            purchasable: sum > 0
        }))
    };

    purchaseHandler = () => {
        this.setState(prev => ({purchasing: true}))
    };

    purchaseCancelHandler = () => {
        this.setState(prev => ({purchasing: false}))
    };

    purchaseContinueHandler = () => {
        const queryParams = [];
        for (let type in this.state.ingredients){
            queryParams.push(encodeURIComponent(type)+ "=" + encodeURIComponent(this.state.ingredients[type]));
        }
        queryParams.push('price=' + this.state.totalPrice);
        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname:"/checkout",
            search: "?"+ queryString
        });
    };

    addIngredientHandler = (type) => {
        this.setState(prev => ({
            totalPrice: prev.totalPrice + INGREDIENTCOST[type]
        }));

        this.setState(prevstate => {
            let ingredients = {...prevstate.ingredients};
            //new object banako ingredients ko as nested state lai direct update garna mildaina
            //make sure name same hunu parxa j ko duplicate gareko
            ingredients[type] = prevstate.ingredients[type] + 1; //aba you new object lai update garyo
            return {ingredients}; // aba tei name hale xi replace hunxa as object le same key bhako lai replace garxa
            //setstate always return object

        }, this.updatePurchasable);
    };

    removeIngredientHandler = (type) => {
        this.setState(prev => {
            let ingredients = {...prev.ingredients};
            ingredients[type] = prev.ingredients[type] - 1;
            return {ingredients};
        });
        this.setState(prev => ({
            totalPrice: prev.totalPrice - INGREDIENTCOST[type]
        }), this.updatePurchasable);
    };

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        let orderSummary = null;
        let burger = this.state.error ? "cannot load the incredients" : <Spinner/>;
        if (this.state.ingredients) {
            burger = <Fragment>
                <Burger ingredients={this.state.ingredients}/>
                <BuilderControls
                    addIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler}
                    disabledInfo={disabledInfo}
                    totalprice={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    purchasingHandler={this.purchaseHandler}
                /></Fragment>;

            orderSummary = <OrderSummary
                totalPrice={this.state.totalPrice}
                ingredients={this.state.ingredients}
                canclePurchase={this.purchaseCancelHandler}
                continuePurchase={this.purchaseContinueHandler}/>;
        }

        if (this.state.loading == true) {
            orderSummary = <Spinner/>
        }
        return (
            <div>
                <Model show={this.state.purchasing} close={this.purchaseCancelHandler}>
                    {orderSummary}
                </Model>
                {burger}
            </div>
        );
    }
}

export default WithErrorHandler(BurgerBuilder, axios);
import React, {Component, Suspense} from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import {Route} from "react-router-dom";
import ContactData from "./ContactData/ContactData";
import {withRouter} from "react-router";

class Checkout extends Component {
    state = {
        ingredients: null,
        price: 0
    };

    componentWillMount() {
        console.log(this.props.match.path);
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        for (let params of query.entries()) {
            // ['salad','1']=> single parameter ho
            if (params[0] === 'price') {
               price = params[1];
            } else {
                ingredients[params[0]] = +params[1];
            }

        }
        this.setState({ingredients: ingredients,price: price });
    }

    checkoutCancelHandler = () => {
        console.log('works');
        this.props.history.goBack();
    };
    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    };

    render() {
        return (

            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    checkoutCancelled={this.checkoutCancelHandler}
                    checkoutContinued={this.checkoutContinuedHandler}
                />
                <Route path={this.props.match.path + '/contact-data'}
                       render={() => (
                           <ContactData
                               ingredients={this.state.ingredients}/>)}/>
            </div>
        )

    }

}

export default withRouter(Checkout);

import React, {Component} from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";

class Checkout extends Component {
    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 1,
            meat: 1
        }
    };

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients={};
        for (let params of query.entries()){
            // ['salad','1']=> single parameter ho
            ingredients[params[0]] = + params[1];
        }
        this.setState({ingredients:ingredients});
    }

    checkoutCancelHandler=()=>{
        console.log('works');
        this.props.history.goBack();
    };
    checkoutContinuedHandler=()=>{
         this.props.history.replace('/checkout/contact-date');
    };
    render() {
        return (
            <CheckoutSummary
                ingredients={this.state.ingredients}
                checkoutCancelled={this.checkoutCancelHandler}
                checkoutContinued={this.checkoutContinuedHandler}
            />
        )

    }

}

export default Checkout;
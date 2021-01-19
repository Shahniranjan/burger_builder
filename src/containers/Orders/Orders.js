import React, {Component, Fragment} from "react";
import Order from "../../components/Order/Order";
import WithErrorHandler from "../../hoc/WithErrorHandler/WithErrorHandler";
import axios from "../../axios-order";

class Orders extends Component {
    state = {
        loading: true,
        order: [],
    };

    componentWillMount() {
        axios.get('/order.json').then(response => {
            this.setState((prevstate) => ({
                loading: false,
                order: response.data
            }));
        }).catch(err => {
            this.setState((prevstate) => ({
                loading: false
            }));
            return err;
        })
    }

    render() {
        return (
            <Fragment>
                {Object.keys(this.state.order).map(key => (
                    <Order key={key} orderInfo={this.state.order[key]}/>
                ))}
            </Fragment>
        )
    }

}

export default WithErrorHandler(Orders, axios);
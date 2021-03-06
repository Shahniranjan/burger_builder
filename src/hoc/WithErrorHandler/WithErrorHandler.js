import React, {Component, Fragment} from "react";
import Model from "../../components/UI/Model/Model";


const WithErrorHandler = (WrapperComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        };

        componentWillMount() {
           this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState(prev => ({error: null}));
                return req;
            });
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState(prev => ({error: error}))
            })
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        errorConformedHandler = () => {
            this.setState(prev => ({error: null}))
        };

        render() {
            return (
                <Fragment>
                    <Model show={this.state.error} close={this.errorConformedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Model>
                    <WrapperComponent {...this.props}/>
                </Fragment>
            )
        }
    }
};

export default WithErrorHandler;

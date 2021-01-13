import React from 'react';
import './App.css';
import Layout from './hoc/Layouts/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from "./containers/Checkout/Checkout";
import {BrowserRouter, Route, Switch} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Layout>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/checkout" component={Checkout}/>
                        <Route exact path="/" component={BurgerBuilder}/>
                    </Switch>
                </BrowserRouter>
            </Layout>

        </div>
    );
}

export default App;

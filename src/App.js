import React from 'react';
import './App.css';
import Layout from './hoc/Layouts/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

function App() {
    return (
        <div className="App">
            <Layout>
                <BurgerBuilder/>
            </Layout>

        </div>
    );
}

export default App;

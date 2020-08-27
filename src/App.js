import React from 'react';
import './App.css';
import Layout from './components/Layouts/Layouts';
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

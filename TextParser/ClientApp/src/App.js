import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout/Layout.component';
import Home from './components/Home/Home.component';
import './custom.css';
import Editor from "./components/Editor/Editor.component";

const App = () => {
    return (
        <Layout>
            <Route exact path='/' component={Home} />
            <Route exact path="/Editor" component={Editor} />

        </Layout>
    );

}


export default App;
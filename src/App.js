import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Pillows from "./components/pillows/Pillows";
import Contact from "./components/Contact";


import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const App = () => {
    useEffect(() => {
        // Init Materialize
        M.AutoInit();
    });

    return (
        <Router>
            <Navbar/>
            <div className="container">
                <Switch>
                    <Route exact path='/home' component={Home}/>
                    <Route exact path='/pillows' component={Pillows}/>
                    <Route exact path='/about' component={About}/>
                    <Route exact path='/contact' component={Contact}/>
                </Switch>
            </div>
        </Router>

    );
};

export default App;

import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Pillows from "./components/pillows/Pillows";
import Pillow from "./components/pillows/Pillow";
import Contact from "./components/pages/Contact";
import Login from "./components/admin portal/login";
import AddPillow from "./components/admin portal/AddPillow";
import SimpleReactLightbox from "simple-react-lightbox";
import {GlobalProvider} from "./context/pillows/GlobalState";
import {AuthProvider} from "./context/auth/authContext";
import setAuthToken from './utils/setAuthToken';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

if (localStorage.token) {
    setAuthToken(localStorage.token)
}

const App = () => {
    useEffect(() => {
        // Init Materialize
        M.AutoInit();

    });


    return (
        <GlobalProvider>
            <AuthProvider>
                <Router>
                    <Navbar/>
                    <Switch>
                        <Route exact path='/home' component={Home}/>
                        <Route exact path='/pillows' component={Pillows}/>
                        <Route exact path='/login' component={Login}/>
                        <Route exact path='/add-pillow' component={AddPillow}/>
                        <SimpleReactLightbox>
                            <Route exact path='/pillow/:id' component={Pillow}/>
                            <Route exact path='/about' component={About}/>
                            <Route exact path='/contact' component={Contact}/>
                        </SimpleReactLightbox>
                    </Switch>
                </Router>
            </AuthProvider>
        </GlobalProvider>
    );
};

export default App;

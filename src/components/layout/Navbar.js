import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className="navbar-fixed">
                <nav className="red lighten-4">
                    <div className="container">
                        <div className="nav-wrapper">
                            <a href="#!" className="brand-logo">Logo</a>
                            <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i
                                className="material-icons">menu</i></a>
                            <ul className="right hide-on-med-and-down">
                                <li><Link to="/home">Home</Link></li>
                                <li><Link to="/pillows">Pillows</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            <ul className="sidenav" id="mobile-demo">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/pillows">Pillows</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    );
};

export default Navbar;

import React, {Fragment, useContext, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {AuthContext} from "../../context/auth/authContext";
import Spinner from "./Spinner";

const Navbar = () => {
    const {logout, isAuthenticated, loadUser} = useContext(AuthContext);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadUser().then(() => {
            setLoading(false)
        })
    }, [])

    if (loading) {
        return <Spinner/>
    }

    return (
        <div>
            <div className="navbar-fixed">
                <nav className="red lighten-4">
                    <div className="container">
                        <div className="nav-wrapper">
                            <h4 className="brand-logo">Logo</h4>
                            <Link to="#" data-target="mobile-demo" className="sidenav-trigger"><i
                                className="material-icons">menu</i></Link>
                            <ul className="right hide-on-med-and-down">
                                <li><Link to="/home">Home</Link></li>
                                <li><Link to="/pillows">Pillows</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                                <li><Link to="/about">About</Link></li>

                                {isAuthenticated ? (
                                    <Fragment>
                                        <li><Link to="/add-pillow">Add Pillow</Link></li>
                                        <li>
                                            <a onClick={logout}><span>Logout</span>
                                            </a>
                                        </li>
                                    </Fragment>
                                ) : (
                                    <li><Link to="/login">Admin</Link></li>
                                )}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            <ul className="sidenav" id="mobile-demo">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/pillows">Pillows</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/add-pillow">Add Pillow</Link></li>

            </ul>
        </div>
    );
};

export default Navbar;

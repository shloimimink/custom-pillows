import React, {useState, useContext, useEffect} from 'react';
import {AuthContext} from "../../context/auth/authContext";


const Login = (props) => {

    const {login, isAuthenticated, error} = useContext(AuthContext);
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    useEffect(() => {
        if (isAuthenticated) {
            props.history.push('/pillows')
        }
    }, [isAuthenticated, props.history])

    const {email, password} = user;

    const onChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    };

    const onSubmit = () => {
        //console.log(email, password)
        login({email, password})
    }

    return (
        <div className="row">
            {error && <p>{error}</p>}
            <br/>
            <br/>
            <div className="col s12 m5 offset-m4 ">
                <div className="card">
                    <div className="card-action grey lighten-3 black-text">
                        <h3>Login Admin</h3>
                    </div>
                    <div className="card-content">
                        <div className="form-field">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                value={email}
                                onChange={onChange}
                            />
                        </div>
                        <br/>
                        <div className="form-field">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={onChange}
                            />
                        </div>
                        <br/>
                        <div className="form-field">
                            <label>
                                <input type="checkbox" id="remem"/>
                                <span>Remember me</span>
                            </label>
                        </div>
                        <br/>
                        <div className="form-field">
                            <button onClick={onSubmit} className="btn-large gray lighten-3">Login</button>
                        </div>
                        <br/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

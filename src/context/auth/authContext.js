import React, {createContext, useReducer} from "react";
import authReducer from "./authReducer";
import setAuthToken from '../../utils/setAuthToken';
import axios from "axios";


//initial state
const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null
};

//create context
export const AuthContext = createContext(initialState);

// Provider component
export const AuthProvider = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

//actions

    // Load User
    const loadUser = async () => {
        if (localStorage.token) {
            setAuthToken(localStorage.token)
        }

        try {
            const res = await axios.get('/api/v1/auth');

            dispatch({type: 'USER_LOADED', payload: res.data})
        } catch (err) {
            dispatch({type: 'AUTH_ERROR'})
        }
    };

    // Login User
    const login = async (formData) => {
        //console.log(formData)
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        try {
            const res = await axios.post('/api/v1/auth', formData, config);

            dispatch({
                type: 'LOGIN_SUCCESS',
                payload: res.data
            });

            //loadUser();
        } catch (err) {
            console.log(err.response)
            dispatch({
                type: 'LOGIN_FAIL',
                payload: err.response.data.msg
            })
        }
    };

    // Logout
    const logout = () => {
        dispatch({type: 'LOGOUT'});
    };


    return (<AuthContext.Provider value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        login,
        loadUser,
        logout

    }}>
        {children}
    </AuthContext.Provider>)
};

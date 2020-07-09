import React, {createContext, useReducer} from "react";
import AppReducer from "./AppReducer";
import axios from "axios";


//initial state
const initialState = {
    pillow: null,
    pillows: [],
    error: null,
    loading: true
};

//create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //actions
    const getPillows = async () => {
        try {
            const res = await axios.get('/api/v1/pillows');
            dispatch({
                type: 'GET_PILLOWS',
                payload: res.data
            })
        } catch (err) {
            dispatch({
                type: 'PILLOW_ERROR',
                payload: err.response.data.error
            })

        }
    };

    const getPillow = async (id) => {
        try {
            const res = await axios.get(`/api/v1/pillows/${id}`);
            dispatch({
                type: 'GET_PILLOW',
                payload: res.data
            })
        } catch (err) {
            dispatch({
                type: 'PILLOW_ERROR',
                payload: err.response.data.error
            })
        }
    };

    const addPillow = async (pillow) => {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        };
        try {
            const res = await axios.post('/api/v1/pillows', pillow, config);
            dispatch({
                type: 'ADD_PILLOW',
                payload: res.data
            })
            return true

        } catch (err) {
            console.log(err.response.data)
            dispatch({
                type: 'PILLOW_ERROR',
                payload: err.response.data
            })
            return false
        }
    };

    return (<GlobalContext.Provider value={{
        pillow: state.pillow,
        pillows: state.pillows,
        error: state.error,
        loading: state.loading,
        getPillow,
        getPillows,
        addPillow
    }}>
        {children}
    </GlobalContext.Provider>)
};


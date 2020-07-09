import React, {useContext, useEffect} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import {GlobalContext} from "../../context/pillows/GlobalState";


const SearchPillows = () => {
    useEffect(() => {
        M.AutoInit();
    });

    return (
        <div className="container">
            <div className="row">
                <div className="input-field col s12 m3">
                    <select>
                        <option value="" disabled selected>Choose Your Size</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </select>
                </div>
                <div className="input-field col s12 m3">
                    <select>
                        <option value="" disabled selected>Choose Your Color</option>
                        <option value="1" className="left">Option 1</option>
                        <option value="2" className="left">Option 2</option>
                        <option value="3" className="left">Option 3</option>
                    </select>
                </div>
                <br/>
                <div className=" col s12 m3 range-field"> Price $
                    <input type="range" id="test5" min="0" max="100"/>
                </div>
            </div>
        </div>
    );
};

export default SearchPillows;

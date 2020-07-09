import React from 'react';
import {Link} from "react-router-dom";


const SinglePillow = ({pillow}) => {

    return (
        <div className="col s12 m2">
            <div className="card">
                <div className="card-image">
                    <img src={pillow.imageUrl} alt=""/>
                    <Link to={`pillow/${pillow._id}`}
                          className="btn-floating halfway-fab waves-effect waves-light red lighten-4"><i
                        className="material-icons">add</i></Link>
                </div>
                <div className="card-content">
                    <p>
                        Click on the plus button for more info
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SinglePillow;

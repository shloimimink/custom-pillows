import React, {Fragment, useContext, useEffect} from 'react';
import {GlobalContext} from "../../context/pillows/GlobalState";
import Parallax from "../layout/Paralex";
import {Link} from "react-router-dom";
import {SRLWrapper} from "simple-react-lightbox";


const Pillow = ({location, match}) => {
    const {getPillow, pillow} = useContext(GlobalContext);

    useEffect(() => {
        getPillow(match.params.id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!pillow) {
        return null
    }

    return (
        <Fragment>

            <Parallax pillow={pillow}/>
            <br/>
            <div className="row">
                <div className="col s12 m6">
                    <div className="btn red lighten-4 green-text waves-effect waves-red">
                        <Link to="/pillows">Back to pillows</Link>
                    </div>
                </div>
            </div>
            <SRLWrapper>
                <div className="container">
                    <div className="row">
                        {pillow.galleryImages.map(img => (
                            <div key={img.imageUrl} className="col s12 m1">
                                <img className="materialboxed responsive-img" src={img.imageUrl} alt=""/>
                            </div>
                        ))}
                        <div className="col s12 m6">
                            <h4>Pillow Number: {pillow.pillowNumber}</h4>
                        </div>
                    </div>
                </div>
            </SRLWrapper>
            <div className="container">
                <div className="row">
                    <div className="col s12 m6">
                        <div className="card grey lighten-5">
                            <span className="card-title">Description</span>
                            <p>{pillow.description}</p>
                            <div className="card-action">
                                <h6 className="pink-text">For More Questions</h6>
                                <Link to="/contact">Please contact via E-mail</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m4">
                        <div className="card-panel white">
                            <div className="card-action">
                                <h5 className="pink-text">More Info</h5>
                                <p className="text-darken-1">Price: {pillow.price}</p>
                                <p className="darken-1">Size: {pillow.size}</p>
                                <p className="darken-1">color: {pillow.pillowColor}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    );
};

export default Pillow;

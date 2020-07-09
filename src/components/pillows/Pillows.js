import React, {Fragment, useContext, useEffect} from 'react';
import SinglePillow from "./SinglePillow";
import SearchPillows from "./SearchPillows";

import {GlobalContext} from "../../context/pillows/GlobalState";

const Pillows = () => {
    const {pillows, getPillows} = useContext(GlobalContext);

    useEffect(() => {
        getPillows();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Fragment>
            <section id="popular" className="section section-popular scrollspy">
                <h4 className="center">
                    <span className="pink-text">Search</span> Pillows</h4>
                <SearchPillows/>
                <div className="container">
                    <div className="row">
                        {pillows.map(pillow => (
                            <SinglePillow key={pillow._id} pillow={pillow}/>
                        ))}

                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Pillows;

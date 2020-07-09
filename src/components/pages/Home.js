import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import M from 'materialize-css/dist/js/materialize.min.js';

import img from "./img/pillowSlider1.jpg";
import img2 from "./img/pillowSlider2.jpg";
import img3 from "./img/pilowSlider3.jpg"


const Home = () => {
    useEffect(() => {
        let elems = document.querySelectorAll('.slider');
        let instances = M.Slider.init(elems, {
            indicators: false,
            duration: 500,
            interval: 6000
        });
        instances[0].start()
    }, []);


    return (
        <div className="slider fullscreen">
            <ul className="slides">
                <li>
                    <img src={img} alt=""/>
                    <div className="caption center-align">
                        <h2>Custom made pillows</h2>
                        <h5 className="light grey-text text-lighten-3 hide-on-small-only">Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Veniam non illo earum cumque id est!</h5>
                        <Link to="/pillows" className="btn btn-large red lighten-4">Learn More</Link>
                    </div>
                </li>
                <li>
                    <img src={img2} alt=""/>
                    <div className="caption left-align">
                        <h2>Make your couch or bed look pretty</h2>
                        <h5 className="light grey-text text-lighten-3 hide-on-small-only">Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Veniam non illo earum cumque id est!</h5>
                        <Link to="/pillows" className="btn btn-large red lighten-4">Learn More</Link>
                    </div>
                </li>
                <li>
                    <img src={img3} alt=""/>
                    <div className="caption right-align">
                        <h2>Bring your comfort to the next level</h2>
                        <h5 className="light grey-text text-lighten-3 hide-on-small-only">Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Veniam non illo earum cumque id est!</h5>
                        <Link to="/pillows" className="btn btn-large red lighten-4">Learn More</Link>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Home;

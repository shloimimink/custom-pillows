import React, {useEffect} from 'react';
import M from "materialize-css";


const Paralex = ({pillow}) => {

    useEffect(() => {
        const elements = document.querySelectorAll(".parallax");
        M.Parallax.init(elements);
    }, []);

    return (
        <div className="parallax-container">
            <div className="parallax"><img src={pillow.bannerImageUrl} alt=""/></div>
        </div>
    );
};

export default Paralex;


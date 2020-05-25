import React from 'react';

const Home = () => {
    return (
        /* Section: Slider */
        <section className="slider">
            <ul className="slides">
                <li>
                    <img src="/src/components/pages/img/resort1.jpg" alt=""/>
                    <div className="caption center-align">
                        <h2>Take Your Dream Vacation</h2>
                        <h5 className="light grey-text text-lighten-3 hide-on-small-only">Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Veniam non illo earum cumque id est!</h5>
                        <a href="#" className="btn btn-large">Learn More</a>
                    </div>
                </li>
                <li>
                    <img src="/src/components/pages/img/resort2.jpg" alt=""/>
                    <div className="caption left-align">
                        <h2>We Work With All Budgets</h2>
                        <h5 className="light grey-text text-lighten-3 hide-on-small-only">Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Veniam non illo earum cumque id est!</h5>
                        <a href="#" className="btn btn-large">Learn More</a>
                    </div>
                </li>
                <li>
                    <img src="/src/components/pages/img/resort3.jpg" alt=""/>
                    <div className="caption right-align">
                        <h2>Group & Individual Getaways</h2>
                        <h5 className="light grey-text text-lighten-3 hide-on-small-only">Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Veniam non illo earum cumque id est!</h5>
                        <a href="#" className="btn btn-large">Learn More</a>
                    </div>
                </li>
            </ul>
        </section>


    );
};

export default Home;

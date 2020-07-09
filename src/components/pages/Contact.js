import React from 'react';

const Contact = () => {
    return (
        <div>
            <br/>
            <div className="container">
                <div className="card-panel grey lighten-3">
                    <h5>Contact Form</h5>
                    <div className="row">
                        <form className="col s12">
                            <div className="row">
                                <div className="input-field col s12 m7">
                                    <i className="material-icons prefix">account_circle</i>
                                    <input id="icon_prefix" type="text" className="validate"/>
                                    <label htmlFor="icon_prefix">Full Name</label>
                                </div>
                            </div>

                            <div className="row">
                                <div className="input-field col s12 m7">
                                    <i className="material-icons prefix">mail</i>
                                    <input id="mail_outline" type="text" className="validate"/>
                                    <label htmlFor="mail_outline">Email</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12 m7">
                                    <i className="material-icons prefix">phone</i>
                                    <input id="icon_telephone" type="tel" className="validate"/>
                                    <label htmlFor="icon_telephone">Phone</label>
                                </div>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="input-field col s7">
                                    <i className="material-icons prefix">mode_edit</i>
                                    <textarea id="icon_prefix2" className="materialize-textarea"/>
                                    <label htmlFor="icon_prefix2">Message</label>
                                </div>
                            </div>
                            <button className="btn red lighten-4" type="submit" name="action">Submit
                                <i className="material-icons right">send</i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <br/>
            <div className="container">
                <section className="section section-follow red lighten-4 white-text center">
                    <div className="row">
                        <div className="col s12">
                            <h4>Follow Caprice Accent By Fay</h4>
                            <p>Follow me on social media or request more information</p>
                            <a href="htttps://facebook.com" className="white-text">
                                <i className="fab fa-facebook fa-4x fa-fw"/>
                            </a>
                            <a href="htttps://gmail.com" className="white-text">
                                <i className="fas fa-envelope fa-4x fa-fw"/>
                            </a>
                            <a href="htttps://instagram.com" className="white-text">
                                <i className="fab fa-instagram fa-4x fa-fw"/>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Contact;

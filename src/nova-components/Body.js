import React from 'react';
import {Link} from "react-router-dom";
import one from '../images/1.jpg';
import two from '../images/2.jpg';
import three from '../images/3.jpg';
import './Body.css';

const Body = () => {
    return (
        <div>
            {/* pics section */}
            <section id="pics">
                <div id="demo" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={one} alt="Los Angeles" className="d-block w-100" />
                        </div>
                        <div className="carousel-item">
                            <img src={two} alt="Chicago" className="d-block w-100" />
                        </div>
                        <div className="carousel-item">
                            <img src={three} alt="New York" className="d-block w-100" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </button>
                </div>
            </section>
            {/* Departments */}
            <section id="dep">
                <div className="card">
                    <div className="card-body cardio">
                        <h4 className="card-title-primary">Cardiology</h4>
                        <p className="card-text">Some example text. Some example text.</p>
                        <Link to="#" className="card-link one">Read More</Link>
                    </div>
                    <div className="card-body neuro">
                        <h4 className="card-title-primary">Neurology</h4>
                        <p className="card-text">Some example text. Some example text.</p>
                        <Link to="#" className="card-link two">Read More</Link>
                    </div>
                    <div className="card-body ent">
                        <h4 className="card-title-primary">ENT Centre</h4>
                        <p className="card-text">Some example text. Some example text.</p>
                        <Link to="#" className="card-link three">Read More</Link>
                    </div>
                </div>
            </section>
            {/* appointment section */}
            <section id="app">
                &gt;Request for appointment online.
                <Link className='btn'>Request an appointment</Link>
            </section>
        </div>
    );
}

export default Body;

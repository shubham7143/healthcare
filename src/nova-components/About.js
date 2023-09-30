import React from 'react';
import {Link} from "react-router-dom";
import medi from '../images/medi2.jpg';
import doc1 from '../images/doc1.jpg';
import doc2 from '../images/doc2.jpg';
import "./About.css";

const About = () => {
    let h2 = {
        color: "lightgreen",
        padding: "4%"
    }
    return (
        <div>
            {/* titles */}
            <h1 className='py-3 px-3' style={{ backgroundColor: "lightGreen", color: "white" }}><strong>About Us</strong></h1>
            <h2 style={h2}>About nova </h2>
            {/* image and about */}
            <img src={medi} alt="nova healthcare" />
            <p className='px-3' style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni impedit fugiat quibusdam! Quod nostrum, nam itaque odio doloremque vel dolorum rerum et maxime aperiam optio.</p>
            <p className='px-3' style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ullam sit laudantium illo voluptate voluptas ab reprehenderit fugit! Quisquam dicta voluptate amet autem esse vero quis omnis quasi corrupti voluptas!</p>
            {/* about doctors */}
            <h2 style={h2}>Providing you with best doctors for best healthcare.</h2>
            <div className="card" style={{width:"400px"}}>
                <img className="card-img-top" src={doc1} alt="Card image" />
                    <div className="card-body">
                        <h4 className="card-title">Dr. S.K. Khanna</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, quo?</p>
                        <Link to="#" className="btn btn-primary">See Profile</Link>
                    </div>
                <img className="card-img-top" src={doc2} alt="Card image" />
                    <div className="card-body">
                        <h4 className="card-title">Dr. Women☕☕</h4>
                        <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate architecto alias voluptatum!</p>
                        <Link to="#" className="btn btn-primary">See Profile</Link>
                    </div>
            </div>
        </div>
    );
}

export default About;

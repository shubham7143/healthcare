import React from 'react';
import {Link} from "react-router-dom";
import cardio from '../images/cardiology.jpg';
import neu from '../images/neurology.jpg';
import ent from '../images/ent-1.jpg';
import "./Departments.css"

const Departments = () => {
  return (
    <div>
      <h1 className='py-3 px-3' style={{ backgroundColor: "lightGreen", color: "white" }}><strong>Departments</strong></h1>
      {/* Departments */}
          <div className="card" style={{ width: "400px" }}>
              {/* cardiology */}
                <img className="card-img-top" src={cardio} alt="Card image" />
                    <div className="card-body">
                        <h4 className="card-title">Cardiology</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, quo?</p>
                        <Link to="#" className="btn">&gt; Read More</Link>
              </div>
              {/* neurology */}
                <img className="card-img-top" src={neu} alt="Card image" />
                    <div className="card-body">
                        <h4 className="card-title">Neurology</h4>
                        <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate architecto alias voluptatum!</p>
                        <Link to="#" className="btn">&gt; Read More</Link>
              </div>
              {/* ent centre */}
                <img className="card-img-top" src={ent} alt="Card image" />
                    <div className="card-body">
                        <h4 className="card-title">ENT Centre</h4>
                        <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate architecto alias voluptatum!</p>
                        <Link to="#" className="btn">&gt; Read More</Link>
                    </div>
            </div>
    </div>
  );
}

export default Departments;

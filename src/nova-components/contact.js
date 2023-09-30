import React from 'react';
import loc from '../images/location.jpg';

const contact = () => {
    let styles = {
        display: "grid"
    }
    let button ={
        color: "#ffffff",
        padding: "2%",
        width: "100%",
        backgroundColor: "#7C5193"
    }
    return (
        <div>
            <h1 className='py-3 px-3' style={{ backgroundColor: "lightGreen", color: "white" }}><strong>Contact Us</strong></h1>
            {/* Address info */}
            <img src={loc} alt="nova" style={{width: "100%"}} />
            <h3 className='px-4 my-2'>Our Address</h3>
            <div className="address px-4">
                <p className="add">500 Terry Francine Street San Francisco, CA 94158</p>
                <p className="ph">Tel: 930XXXXXXX <br />Tel: 930XXXXXXX </p>
                <p className="email">E-mail: nova@gmail.com</p>
            </div>
            {/* Contact form */}
            <form className='px-4 my-2'>
                <div className="form-group" id="row" style={styles}>
                    <div className="col col-sm-12 col-lg-6">
                        <label for="f-name">First name</label>
                        <input type="text" className="form-control" placeholder="First name" />
                    </div>
                    <div className="col col-sm-12 col-lg-6">
                        <label for="l-name">Last name</label>
                        <input type="text" className="form-control" placeholder="Last name" />
                    </div>
                </div>
                <div className="form-group">
                    <label for="email">Email address *</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="number">Phone number</label>
                    <div className="input-group mb-2">
                        <div className="input-group-prepend">
                            <div className="input-group-text">+91</div>
                        </div>
                        <input type="number" className="form-control" id="number" placeholder="Phone number" />
                    </div>
                </div>
                <div className="form-group">
                    <label for="subject">Subject</label>
                    <input type="text" className="form-control" id="subject" aria-describedby="emailHelp" placeholder="Subject" required />
                    <label for="message">Message</label>
                    <textarea class="form-control" rows="3" id="message" name="text"></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={button}>Submit</button>
            </form>
        </div>
    );
}

export default contact;

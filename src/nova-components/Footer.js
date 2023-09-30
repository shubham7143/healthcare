import React from "react";
import {Link} from "react-router-dom";

const Footer = () => {
  let styles = {
    color: "white",
    fontSize: "120%",
    textAlign: "center",
    backgroundColor: "lightgreen",
  };
  let paraStyle = {
    width: "50%",
    margin: "auto"
  }
  return (
    <div className="py-3" style={styles}>
      <p>
        &copy;<span style={{ fontFamily: "lucida handwriting" }}>nova healthcare.</span>
      </p>
      <p style={paraStyle}>500 Terry Francine Street San Francisco, CA 94158</p>
      <p>Tel: 930XXXXXXX</p>
      <div>
        Follow us on <br />
        <Link to="#" className="social-handle mx-2" style={{ color: "#FFFFFF" }}>
          <i className="fa-brands fa-facebook"></i>
        </Link>
        <Link to="#" className="social-handle mx-2" style={{ color: "#FFFFFF" }}>
          <i className="fa-brands fa-twitter"></i>
        </Link>
        <Link to="#" className="social-handle mx-2" style={{ color: "#FFFFFF" }}>
          <i className="fa-brands fa-instagram"></i>
        </Link>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  let logo = {
    fontFamily: "lucida handwriting",
    fontWeight: "bold",
    color: "#9155A7",
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <strong style={logo}
            >nova</strong>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#navbarOffcanvas"
            aria-controls="navbarOffcanvas"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="navbarOffcanvas"
            aria-labelledby="navbarOffcanvasLabel"
          >
            <div className="offcanvas-header">
              <h5>Menu</h5>
              <button
                type="button"
                class="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/about">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/contact">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/departments">
                      Departments
                    </Link>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>

  );
};

export default Header;

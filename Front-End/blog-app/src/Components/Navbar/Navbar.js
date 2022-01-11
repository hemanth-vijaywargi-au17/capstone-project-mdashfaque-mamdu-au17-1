import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const user = null;
  return (
    <div className="blog__navbar">
      <div className="blog__navbar-links">
        <div className="blog__navbar-links__logo">
          <Link to="/">
            <h2>DEV.BLOG</h2>
          </Link>
        </div>
        <div className="blog__navbar-container">
          <div className="blog__navbar-links-container">
            <Link className="link" to="/membership">
              Membership
            </Link>
            <Link className="link" to="/write">
              Write
            </Link>
          </div>
          <div className="blog__navbar-get-started">
            <Link className="link" to="/signin">
              Sign in
            </Link>
            <Link to="/signin">
              <button className="get-started-btn" type="button">
                Get started
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="underline"></div>
    </div>
  );
};

export default Navbar;

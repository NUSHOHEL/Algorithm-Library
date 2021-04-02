/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Algorithm Library</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav ">
                    <Link to='/home' className="nav-link nav-item active" >Home</Link>
                    <Link to ='/orders' className="nav-item nav-link active">Orders</Link>
                    <Link to="/admin" className="nav-item nav-link active">Admin</Link>
                    <Link to="/cart" className="nav-item nav-link active" >Cart</Link>
                    <Link to="/login" className="nav-item nav-link active" >Login</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
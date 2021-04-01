/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <ul className="nav bg-dark justify-content-end">
                <li className="nav-item ">
                    <Link to='/home' className="nav-link active" >Home</Link>
                </li>
                <li className="nav-item">
                    <Link to ='/orders' className="nav-link">Orders</Link>
                </li>
                <li className="nav-item">
                    <Link to="/admin" className="nav-link">Admin</Link>
                </li>
                <li className="nav-item">
                    <Link to="/cart" className="nav-link" >Cart</Link>
                </li>
                <li className="nav-item mr-5">
                    <Link to="/login" className="nav-link btn btn-primary" >Login</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
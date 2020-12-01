import React from 'react';
import { Link } from 'react-router-dom';
const Nav = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark mb-3">
                <Link to="/" className="btn btn-outline-danger">Home</Link>
                <Link to="/about" className="btn btn-outline-warning">About us</Link>
                <Link to="/shop" className="btn btn-outline-info">Shop</Link>
                <Link to="/users" className="btn btn-outline-light">Users</Link>
            </nav>
        </div>

    );
}
export default Nav;
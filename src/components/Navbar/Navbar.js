import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <NavLink className='nav'
                to="/home"
                activeStyle={{
                    fontWeight: "bold",
                    color: "blue"
                }}
            >
                Home
            </NavLink>
            <NavLink className='nav'
                to="/about"
                activeStyle={{
                    fontWeight: "bold",
                    color: "blue"
                }}
            >
                About
            </NavLink>
            <NavLink className='nav'
                to="/contact"
                activeStyle={{
                    fontWeight: "bold",
                    color: "blue"
                }}
            >
                Contact
            </NavLink>
        </div>
    );
};

export default Navbar;
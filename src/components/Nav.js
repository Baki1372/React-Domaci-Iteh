import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
    return (
        <div className="divnav">
            <nav className="navbar navbar-light bg-light">
             <Link id="home-contact" className="navbar-brand" to="/">Home</Link>
             <Link id="nav-contact" className="navbar-brand" to="contact">Contact</Link>
        </nav>
        </div>
    )
    }

export default Nav
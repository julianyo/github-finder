import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({title, icon}) => {
    
//Navbar JSX
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <h1 className="navbar-brand mb-0 h1"><i className={icon + ' mx-2'}></i>{title}</h1>
                <ul className='navbar-nav flex-row'>
                <li className='nav-item'><Link className='nav-link mx-2' to="/" >Home</Link></li>
                <li className='nav-item'><Link className='nav-link mx-2' to="/about" >About</Link></li>
            </ul>
            </div>
        </nav>
    );
}

//Defaults
Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'bi bi-github'
};

//Proptypes
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
};

export default Navbar


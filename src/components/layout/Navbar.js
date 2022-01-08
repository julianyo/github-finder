import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({title, icon}) => {
    
//Navbar JSX
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <h1 className="navbar-brand mb-0 h1"><i className={icon + ' mx-2'}></i>{title}</h1>
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


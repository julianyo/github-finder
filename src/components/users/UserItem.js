import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: {login, avatar_url, html_url} }) => {
    return (
        <div className='card text-center gy-2 col-12 col-md-4 col-lg-4 py-4'>
                <img src={avatar_url} className='border rounded-circle my-2 mx-auto' alt={login + 's profile picture'} style={{width:'60px'}} />
                <h3>{login}</h3>
                
                <div>
                    <Link to={`/user/${login}`} className='btn btn-dark rounded-0 my-1 py-1 px-4'>More</Link>
                </div>
        </div>
    )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
}

export default UserItem

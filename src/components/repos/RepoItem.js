import React from 'react';
import PropTypes from 'prop-types';

function RepoItem({repo}) {
    return (
        <div className="col-12 col-md-4 gx-1">
            <div className='px-3 py-0 d-block btn btn-secondary text-start mb-1'>
                <a className='text-decoration-none' href={repo.html_url}><h3 className='h6 text-light m-0 py-3'>{repo.name.substring(0, 20)}</h3></a>
            </div>
        </div>
        
    )
}

RepoItem.propTypes = {
    repo: PropTypes.object.isRequired,
}

export default RepoItem

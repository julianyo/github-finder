import React, { Component, Fragment } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class User extends Component {
    componentDidMount(){
        this.props.getUser(this.props.match.params.login);
    }

    static propTypes = {
        loading: PropTypes.bool.isRequired,
        user: PropTypes.object.isRequired,
        getUser: PropTypes.func.isRequired,
    }

    render() {

        const {
            name,
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable,
        } = this.props.user;

        const { loading } = this.props;
        
        if(loading) return <Spinner/>

        return (
            <Fragment>
                <Link to='/' className='btn btn-dark'>Back to search</Link>
                <div className="container mt-2">
                    <div className="row">
                        <main className='card p-4 col-12 col-md-6 col-lg-5 mx-auto'>
                            <img src={avatar_url} alt='' className='col-8 col-md-5 col-lg-4 rounded mb-4 mx-auto'/>
                            <div className='d-flex flex-column flex-md-row justify-content-between'><h1 className='m-0'>{name}</h1>
                            {hireable ? 
                                    ( <i className="bi bi-check-lg text-success align-self-md-center ms-md-3">Hireable</i> ):
                                    ( <i className="bi bi-x-lg text-danger align-self-center ms-3">Not hireable</i> )}</div>
                            <div>
                                <div className='d-inline-flex flex-row flex-xl-row mt-2'>
                                    {followers && <p className='m-0 bg-success px-2 py-1 rounded text-white'>Followers {followers}</p>}
                                    {following && <p className='m-0 px-2 py-1 rounded bg-danger text-white ms-1'>Following {following}</p>}
                                </div>
                                <div className='mt-4'>
                                <p className='m-0'><b>Location: </b>{location}</p>
                                    {login && <p className='m-0'><b>Username: </b>{login}</p>}
                                    {blog && <p className='m-0'><b>Blog: </b> 
                                    { blog.includes('http') ?
                                    (<a href={blog}>{blog}</a>):
                                    (<a href={`https://${blog}`}>{blog}</a>)}
                                    </p>}
                                </div>
                                <p className='my-3'>
                                    {bio && 
                                    <Fragment>
                                    {bio}
                                    </Fragment>}
                                </p>
                                <a href={html_url} className='btn btn-dark col-12 mt-3'>Visit Github</a>
                            </div>
                        </main>
                    </div>
                    <aside className='row mt-1'>
                        <div className="col-12 col-md-6 col-lg-5 mx-auto card p-4">
                            <p className='m-0'>Public repos: {public_repos}</p>
                            <p className='m-0'>Public gists: {public_gists}</p>
                        </div>
                    </aside>
                </div>
            </Fragment>
        )
    }
}

export default User

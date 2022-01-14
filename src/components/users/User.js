import React, { Component, Fragment } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Repos from '../repos/Repos';

export class User extends Component {
    componentDidMount(){
        this.props.getUser(this.props.match.params.login);
        this.props.getUserRepo(this.props.match.params.login);
    }

    static propTypes = {
        loading: PropTypes.bool.isRequired,
        user: PropTypes.object.isRequired,
        repos: PropTypes.array.isRequired,
        getUser: PropTypes.func.isRequired,
        getUserRepo: PropTypes.func.isRequired,
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
            company,
        } = this.props.user;

        const { loading , repos} = this.props;
        
        if(loading) return <Spinner/>

        return (
            <Fragment>
                <Link to='/' className='btn bg-dark text-white'>Back to search</Link>
                <div className="container col-lg-9 mt-2">
                        <main className='row p-2 py-4 px-lg-4 border border-secondary rounded flex-column flex-md-row'>
                            <div className='col-12 col-md-6'>
                                <img className='d-block col-6 col-md-8 col-lg-7 mx-auto mb-2 col-md-5 mx-md-0 rounded' src={avatar_url} alt="" />
                                {location && <p className='m-0 text-center text-md-start'>Location: {location}</p>} 
                                {hireable ? <i className="d-block text-center text-md-start bi bi-check-lg text-success"> Hireable</i> :
                                <i className="d-block text-center text-md-start bi bi-x-lg text-danger"> Not hireable</i>}
                            </div>
                             
                            <div className='col-12 col-md-6'>
                                <h1 className='mt-3 mt-md-0 text-center text-md-start'>{name}</h1>
                                <p className='mt-2 mb-3 col-lg-10'>
                                    {bio && 
                                    <Fragment>
                                    {bio}
                                    </Fragment>}
                                </p>
                                <div className='d-flex'>
                                <a href={html_url} className='btn bg-dark text-white'>Visit Github</a>

                                { 
                                blog && (blog.includes('http') && blog.includes('.com'))  ? <p>{blog}</p> :
                                blog && blog.includes('http') ? <p>{blog} had html no .com</p> : null
                                }
                        
                                </div>
                                <div className='mt-3'>
                                    <p className='m-0'>Username: {login}</p>
                                    {company && (<p>Company: {company}</p>)}
                                </div>
                            </div>
                        </main>
                    
                    <aside className='row card my-2 border border-secondary'>
                            <div className='col-12 p-4 flex-column flex-md-row d-flex justify-content-center'>
                                <p className='m-0 py-0 mt-1 mt-md-0 mx-md-2 btn bg-success bg-gradient text-white'>Followers: {followers}</p>
                                <p className='m-0 py-0 mt-1 mt-md-0 mx-md-2 btn bg-danger bg-gradient text-white'>Following: {following}</p>
                                <p className='m-0 py-0 mt-1 mt-md-0 mx-md-2 btn bg-light bg-gradient text-dark btn-outline-secondary'>Public repos: {public_repos}</p>
                                <p className='m-0 py-0 mt-1 mt-md-0 mx-md-2 btn bg-dark bg-gradient text-white'>Public gists: {public_gists}</p>
                            </div>
                        </aside>
                        <div className="row">
                            <h3 className='h5 m-0 p-0 my-2'>Repos</h3>
                            <Repos repos={repos} />
                        </div>
                </div>
            </Fragment>
        )
    }
}

export default User

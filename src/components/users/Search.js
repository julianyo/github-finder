import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
    state = {
        text:'',
    };

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired,
    };

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit= (e) => {
       e.preventDefault();

       //Check for user input
       if(this.state.text){
           this.props.searchUsers(this.state.text);
           this.setState({ text: '' });
       }
       else {
           this.props.setAlert('Please enter something', 'danger')
       }
    };

    clearUsers = () => {
       this.props.clearUsers();
    };

    render() {
        const {showClear, clearUsers} = this.props;

        return (
            <div className="container mb-3 p-0">
                 <form className='row' onSubmit={ this.onSubmit } >
                     <div className='col-8 col-lg-5 offset-lg-0 pe-1'>
                        <input autoComplete='off' type="text" name='text' placeholder='Search Users...' className="form-control" value={this.state.text}
                        onChange={this.onChange}
                        />
                     </div>
                     <button type='submit' className='btn btn-success col-4 col-lg-2'>Search</button>
                  
                        {showClear && <button type='button' className='btn btn-danger col-12 col-lg-1 mt-2 mt-lg-0 ms-lg-1' onClick={clearUsers}>Clear</button>}
                 
                </form>
            </div>
        )
    }
}

export default Search

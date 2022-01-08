import React, { Component } from 'react'

export class Search extends Component {
    state = {
        text:'',
    };

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit= (e) => {
       e.preventDefault();
       this.props.searchUsers(this.state.text);
       this.setState({ text: '' });
    };

    render() {
        return (
            <div className="container">
                 <form className='mb-3 row' onSubmit={ this.onSubmit } >
                     <div className='col-8 col-lg-4 m-0 ps-0'>
                        <input type="text" name='text' placeholder='Search Users...' className="form-control" value={this.state.text}
                        onChange={this.onChange}
                        />
                     </div>
                   
                     <button type='submit' className='btn btn-primary col-4 col-lg-2'>Search</button>
                </form>
            </div>
        )
    }
}

export default Search

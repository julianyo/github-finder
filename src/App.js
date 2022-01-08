import React, {Component} from "react";
import axios from 'axios';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  async componentDidMount(){
    this.setState({loading: true});
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=client_id=${process.env.REACT_APP_GITHUB_SECRET}`);

    this.setState({users: res.data, loading: false});
  };

  //Search github users
  searchUsers= (text) => {
    console.log(text)
  };

  render()
  {
        return (
          <div className="App">
            <Navbar title='Github Finder' icon='bi bi-github' />
            <div className="container my-4">
              <Search searchUsers={ this.searchUsers } />
              <Users loading={ this.state.loading } users={this.state.users} />
            </div>
          </div>
        );
  } 
}

export default App;

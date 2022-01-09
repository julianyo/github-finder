import React, {Component} from "react";
import PropTypes from 'prop-types';
import axios from 'axios';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from "./components/layout/Alert";

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
  };

  //Search github users
  searchUsers = async (text) => {
    this.setState({ loading: true });
    
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=client_id=${process.env.REACT_APP_GITHUB_SECRET}`);

    //Change users state data and stop loading
    this.setState({users: res.data.items, loading: false});
  };

  //Clear users from state
  clearUsers = () => {
    this.setState({
      users: [],
      loading: false,
    })
  };

  //Set Alert
  setAlert = (msg, type) => {
    //Show current alert from state
    this.setState({ alert: { msg, type }});

    //Reset the alert state after 3s
    setTimeout(() => this.setState({alert: null}), 3000)
  }

  render()
  {
    const { users, loading } = this.state;
        return (
          <div className="App">
            <Navbar title='Github Finder' icon='bi bi-github' />
            <div className="container my-4">
              <Alert alert={this.state.alert}/>
              <Search
              searchUsers={ this.searchUsers }
              clearUsers={ this.clearUsers }
              showClear={ users.length > 0 ? true : false }
              setAlert={ this.setAlert }
              />
              <Users loading={ loading } users={users} />
            </div>
          </div>
        );
  } 
}

export default App;

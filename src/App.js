import React, {Component, Fragment} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from 'axios';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from "./components/layout/Alert";
import empty_img from './assets/empty.svg';
import again_img from './assets/again.svg';

import About from "./components/pages/About";
import User from "./components/users/User";

class App extends Component {
  state = {
    users: [],
    user: {},
    loading: false,
    alert: null,
    empty: true,
    hasSearched:false,
  };

  //Search github users
  searchUsers = async (text) => {
    this.setState({ loading: true, empty:false, hasSearched:true, });
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=client_id=${process.env.REACT_APP_GITHUB_SECRET}`);

    //Change users state data and stop loading
    this.setState({users: res.data.items, loading: false});
  };

  //Get single Github user
  getUser = async (username) => {
    this.setState({ loading: true });

    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=client_id=${process.env.REACT_APP_GITHUB_SECRET}`);

    this.setState({user: res.data, loading: false});
  }

  //Clear users from state
  clearUsers = () => {
    this.setState({
      users: [],
      loading: false,
      empty: true,
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
    const { users, loading, user} = this.state;
        return (
          <BrowserRouter>
            <div className="App">
              <Navbar title='Github Finder' icon='bi bi-github' />
              <div className="container my-4">
              <Alert alert={this.state.alert}/>
                <Switch>
                  <Route exact path='/' render={props => (
                    <Fragment>
                      <Search
                          searchUsers={ this.searchUsers }
                          clearUsers={ this.clearUsers }
                          showClear={ users.length > 0 ? true : false }
                          setAlert={ this.setAlert }
                          />
                          {this.state.empty ?
                          <Fragment>
                            <img src={!this.state.hasSearched ? empty_img : again_img } className="col-10 col-md-5 col-lg-3 mx-auto d-block mt-5 pt-5" alt="Illustration of characters searching for something." />
                            <p className="text-center mt-4 text-secondary">{ !this.state.hasSearched ? `Looks like you haven't searched for a user yet...`: `Let's try that again!`}</p>
                          </Fragment> : null}
                          <Users loading={ loading } users={users} />
                    </Fragment>
                  )}/>

                  <Route exact path='/about' component={About} />
                  <Route exact path='/user/:login' render={(props) =>
                  (
                    <User { ...props } getUser={ this.getUser } user={user} loading={ loading } />
                  )} />
                </Switch>
              </div>
            </div>
          </BrowserRouter>
        );
  } 
}

export default App;

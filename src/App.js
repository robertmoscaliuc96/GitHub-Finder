import React, {Component, Fragment} from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import About from './components/pages/About'
import Jobs from './components/pages/Jobs'
import axios from 'axios';
import Alert from './components/layout/Alert'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'


class App extends Component {
  // lifecycle 
  state= {
    users: [],
    loading: false,
    alert: null
  }

  //this will run when the components mount
/*    async componentDidMount() {
    // this is how to change a state in react using setState
   this.setState({loading: true})
   const res= await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
   
   this.setState({users:res.data, loading:false})
  }
   */


  // Takes the props from Search.js
  // Search github users
  searchUsers = async (text) => {
    this.setState({loading: true})

    const res= await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
    this.setState({users:res.data.items, loading:false})
  }

  // clear users from state
  clearUsers = () => this.setState({users: [], loading:false});

  // Alert if the form is empty 
  setAlert = (msg, type) => {
    this.setState({alert: {msg, type}})

    setTimeout( () => this.setState({alert:null}), 5000)
  }


  render(){
    const {loading, users} = this.state
    return (
    <Router>
    <div className="App">
        <Navbar/>
        <div className="container">
          
          <Alert alert = {this.state.alert}></Alert>
          <Switch>
            <Route exact path="/" render={ props => (
              <Fragment>
                <Search  
                  searchUsers={this.searchUsers} 
                  clearUsers={this.clearUsers} 
                  showClear={this.state.users.length > 0 ? true : false}
                  setAlert={this.setAlert}  
                  />                
                <Users loading={loading} users={users}/> 
              </Fragment>
            )}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/jobs" component={Jobs}/>
          </Switch>
 
          </div>

    </div>      
    </Router>

  );
  }

}

export default App;
 
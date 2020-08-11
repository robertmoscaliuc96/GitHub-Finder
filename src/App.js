import React, {useState, Fragment} from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User'
import Search from './components/users/Search';
import About from './components/pages/About';
import Jobs from './components/pages/Jobs';
import axios from 'axios';
import Alert from './components/layout/Alert';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const App = () => {
  // lifecycle 
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  // Get single Github user
   const getUser = async (username) => {
    setLoading(true)
    
    const res= await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    setUser(res.data.items);
    setLoading(false);
  }
  
  
  // Takes the props from Search.js
  // Search github users
   const searchUsers = async (text) => {
    setLoading(true)
    
    const res= await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
    setUsers(res.data.items);
    setLoading(false);
  }
  
  // clear users from state
  const clearUsers = () =>{   
      setUsers([]);
      setLoading(false);
    };
  
  // Alert if the form is empty 
  const showAlert = (msg, type) => {
   setAlert({msg, type})
    
    setTimeout( () => setAlert(null), 5000)
  }


  
  

    //const {loading, user, users} = this.state
    return (
      <Router>
    <div className="App">
        <Navbar/>
        <div className="container">
          
          <Alert alert = {alert}></Alert>
          <Switch>
            <Route exact path="/" render={ props => (
              <Fragment>
                <Search  
                  searchUsers={searchUsers} 
                  clearUsers={clearUsers} 
                  showClear={users.length > 0 ? true : false}
                  setAlert={showAlert}  
                  />                
                <Users loading={loading} users={users}/> 
              </Fragment>
            )}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/jobs" component={Jobs}/>
            <Route exact path="/user/:login" render={props => (
              <User {...props} getUser={getUser} user={user} loading={loading}/>
            )}/>
          </Switch>
 
          </div>

    </div>      
    </Router>

);
}



export default App;

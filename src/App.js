import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import User from './components/users/User'
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Home from './components/pages/Home';
import JobsGit from './components/pages/JobsGit';
import Alert from './components/layout/Alert';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GithubState from './components/context/github/githubState'
import AlertState from './components/context/alert/alertState'


const App = () => {
    //const {loading, user, users} = this.state
    return (
      <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar />
            <div className='container'>
              <Alert />
              <Switch>
                <Route exact path='/home' component={Home} />
                <Route exact path='/user/:login' component={User} />
                <Route exact path="/jobs" component={JobsGit}/>
                <Route exact path='/about' component={About} />
                <Route component={NotFound}/>
                
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>      
);
}

export default App;

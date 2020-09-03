import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import User from './components/users/User'
import NotFound from './components/pages/NotFound';
import Home from './components/pages/Home';
import JobsGit from './components/pages/JobsGit';
import Alert from './components/layout/Alert';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GithubState from './components/context/github/githubState'
import AlertState from './components/context/alert/alertState'


const App = () => {
    return (
      <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar />
            <div className='container'>
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/user/:login' component={User} />
                <Route exact path="/jobs" component={JobsGit}/>
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

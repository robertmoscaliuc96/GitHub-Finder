import React, {Component} from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search'
import axios from 'axios';


class App extends Component {
  // lifecycle 
  state= {
    users: [],
    loading: false
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

  render(){
    return (
    <div className="App">
        <Navbar/>
        <div className="container">
        
        <Search  searchUsers={this.searchUsers}/>
        <Users loading={this.state.loading} users={this.state.users}/> 
        </div>

    </div>
  );
  }

}

export default App;
 
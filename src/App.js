import React, {Component} from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';


class App extends Component {
  // lifecycle 
  state= {
    users: [],
    loading: false
  }
  //this will run when the components mount
   async componentDidMount() {
    // this is how to change a state in react using setState
   this.setState({loading: true})
   const res= await axios.get('https://api.github.com/users');
   
   this.setState({users:res.data, loading:false})
  }
  


  render(){
    return (
    <div className="App">
        <Navbar/>
        <div className="container">
        <Users loading={this.state.loading} users={this.state.users}/> 
        </div>

    </div>
  );
  }

}

export default App;
 
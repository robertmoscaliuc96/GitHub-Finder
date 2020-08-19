import React, {useReducer} from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
    SEARCH_USERS,
    GET_USER,
    CLEAR_USERS,
    SET_LOADING,

} from '../types';

const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
        
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Takes the props from Search.js
  // Search github users
  const searchUsers = async (text) => {
    setLoading();
    
    const res= await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
    dispatch({
        type: SEARCH_USERS,
        payload: res.data.items
      });
  
  }

    //Get User
  // Get single Github user
    const getUser = async (username) => {
        setLoading(true)
        
        const res= await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        
        dispatch({
            type: GET_USER,
            payload:res.data
        })
  }
  

    //Get Repos


    //Clear Users
    // clear users from state
    const clearUsers = () => dispatch({ type: CLEAR_USERS });

    // Set Loading
    const setLoading= () => {
        dispatch({type: SET_LOADING});
    }

    return <GithubContext.Provider
                value={{
                    users: state.users,
                    user: state.user,
                    repos: state.repos,
                    loading: state.loading,
                    searchUsers,
                    clearUsers,
                    getUser,
                }}
            >
                {props.children}
    </GithubContext.Provider>
}

export default GithubState
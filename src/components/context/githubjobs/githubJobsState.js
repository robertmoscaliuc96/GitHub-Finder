import React, {useReducer} from 'react';
import axios from 'axios';
import GithubJobsContext from './githubJobsContext';
import GithubJobsReducer from './githubJobsReducer';
import {
    MAKE_REQUEST,
    ERROR,
    GET_JOBS,
    UPDATE_NEXT_PAGE,
    SET_LOADING,
  
  } from '../types';

const BASE_URL = 'https://api.github.com/users'

const GithubJobsState = props => {

    const initialState = {
        jobs: [],
        loading: true,

    }

    const [state, dispatch] = useReducer(GithubJobsReducer, initialState);

    const searchJobs = async () => {
        setLoading();

        const cancelToken1 = axios.CancelToken.source()
        dispatch({ type: MAKE_REQUEST })

        const res= await axios.get(BASE_URL, {
            cancelToken: cancelToken1.token,
            params: {markdown: true, page: page, ...params}
        });
        dispatch({
            type:GET_JOBS,
            payload: res.data
        })

    }
    const searchPageJobs = async () => {
        const cancelToken2 = axios.CancelToken.source()

        const res= await axios.get(BASE_URL, {
            cancelToken: cancelToken2.token,
            params: {markdown: true, page: page + 1, ...params}
        });
        dispatch({
            type:UPDATE_NEXT_PAGE,
            payload: {hasNextPage: res.data.length !== 0}
        })

    }
    const setLoading= () => {
        dispatch({type: SET_LOADING});
    }

    return <GithubJobsContext.Provider 
                    value={{
                        jobs: state.jobs,
                        loading: loading.jobs,
                        searchJobs,
                        searchPageJobs
                    }}
                    >
                    {props.children}
                    </GithubJobsContext.Provider>

}

export default GithubJobsState

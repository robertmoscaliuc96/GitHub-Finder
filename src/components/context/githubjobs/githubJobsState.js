import { useReducer, useEffect } from 'react'
import axios from 'axios'
import GithubJobsReducer from './githubJobsReducer';
import {
  MAKE_REQUEST,
  ERROR,
  GET_JOBS,
  UPDATE_NEXT_PAGE,
  

} from '../types';


const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json'


 const GithubJobsState = (params, page)=> {

    const initialState = {
        jobs: [],
        loading: false
        
    }
    const [state, dispatch] = useReducer(GithubJobsReducer, initialState)

    useEffect(() => {

        const cancelToken1 = axios.CancelToken.source()
        dispatch({
             type: MAKE_REQUEST 
            })

        axios.get(BASE_URL, {
            cancelToken: cancelToken1.token,
            params: { markdown: true, page: page, ...params}
        }).then(res => {
        dispatch({ 
            type: GET_JOBS, 
            payload: { jobs: res.data } }) 
        }).catch(e => {
        if (axios.isCancel(e)) return
        dispatch({ 
            type: ERROR, 
            payload: { error: e } }) 
        })

        const cancelToken2 = axios.CancelToken.source()

        axios.get(BASE_URL, {
        cancelToken: cancelToken2.token,
        params: { markdown: true, page: page + 1, ...params }
        }).then(res => {
        dispatch({ 
            type: UPDATE_NEXT_PAGE, 
            payload: { hasNextPage: res.data.length !== 0 } }) 
        }).catch(e => {
        if (axios.isCancel(e)) return
        dispatch({ 
            type: ERROR, 
            payload: { error: e } }) 
        })

        return () => {
        cancelToken1.cancel()
        cancelToken2.cancel()
        }
        // eslint-disable-next-line
  }, [])
  
  return state
}

export default GithubJobsState
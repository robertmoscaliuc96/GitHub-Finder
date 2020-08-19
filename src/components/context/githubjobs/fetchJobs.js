import { useReducer, useEffect } from 'react'
import axios from 'axios'
import {
  MAKE_REQUEST,
  ERROR,
  GET_JOBS,
  UPDATE_NEXT_PAGE,
  SET_LOADING,

} from '../types';
import GithubJobsReducer from './githubJobsReducer';


const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json'


export default function useFetchJobs(params, page) {
  const [state, dispatch] = useReducer(GithubJobsReducer, { jobs: [], loading: true })

  useEffect(() => {
    const cancelToken1 = axios.CancelToken.source()
    dispatch({ type: MAKE_REQUEST })
    axios.get(BASE_URL, {
      cancelToken: cancelToken1.token,
      params: { markdown: true, page: page, ...params }
    }).then(res => {
      dispatch({ type: GET_JOBS, payload: { jobs: res.data } }) 
    }).catch(e => {
      if (axios.isCancel(e)) return
      dispatch({ type: ERROR, payload: { error: e } }) 
    })

    const cancelToken2 = axios.CancelToken.source()
    axios.get(BASE_URL, {
      cancelToken: cancelToken2.token,
      params: { markdown: true, page: page + 1, ...params }
    }).then(res => {
      dispatch({ type: UPDATE_NEXT_PAGE, payload: { hasNextPage: res.data.length !== 0 } }) 
    }).catch(e => {
      if (axios.isCancel(e)) return
      dispatch({ type: ERROR, payload: { error: e } }) 
    })

    return () => {
      cancelToken1.cancel()
      cancelToken2.cancel()
    }
  }, [])
  
  return state
}
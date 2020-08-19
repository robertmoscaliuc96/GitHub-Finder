import React, { useEffect,Fragment, useContext } from 'react';
import GithubJobsContext from '../context/githubjobs/githubJobsContext'
import githubContext from '../context/github/githubContext';
import { GET_USER } from '../context/types';


const Job = ({job}) => {
    const githubJobsContext = useContext(GithubJobsContext);

    const{searchJobs,searchPageJobs, jobs} = githubContext;

    useEffect ( () => {

    },[])

    return (
        <div>
            {job.title}
        </div>
    )
}
export default Job
import React, {useState} from 'react';
import GithubJobsState from '../context/githubjobs/githubJobsState'
import Job from "../jobs/Job"
import Spinner from '../layout/Spinner'
import {Container} from 'react-bootstrap'

function Jobs() {

    const [params,setParams] = useState({});
    const [page, setPage] = useState(1)
    const {jobs,loading,error} = GithubJobsState(params,page)
  
    return (
      <Container>
      <h1>Jobs</h1>
                {loading && <Spinner></Spinner>}
                {error && <h1>Error....</h1>}
                {jobs.map(job => {
                  return <Job key={job.id} job={job}/>
                })}
      </Container>
    );
  }
  



export default Jobs



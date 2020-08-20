import React, {useState} from 'react';
import GithubJobsState from '../context/githubjobs/githubJobsState'
import Job from "../jobs/Job"
import Spinner from '../layout/Spinner'
import {Container} from 'react-bootstrap';
import JobPagination from './JobPagination'

function Jobs() {

    const [params,setParams] = useState({});
    const [page, setPage] = useState(1)
    const {jobs,loading,error} = GithubJobsState(params,page)
  
    return (
      <Container className="my-4">
      <h1 className="mb-4">GitHub Jobs</h1>
                <JobPagination page={page} setPage={setPage}/>
                {loading && <Spinner></Spinner>}
                {error && <h1>Error....</h1>}
                {jobs.map(job => {
                  return <Job key={job.id} job={job}/>
                })}
                <JobPagination page={page} setPage={setPage}/>
      </Container>
    );
  }
  



export default Jobs



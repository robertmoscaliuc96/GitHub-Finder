import React, {useState} from 'react';
import GithubJobsState from '../context/githubjobs/githubJobsState'
import Job from "../jobs/Job"
import Spinner from '../layout/Spinner'
import {Container} from 'react-bootstrap';
import JobPagination from './JobPagination'
import SearchJob from './SearchJob'

function Jobs() {

    const [params,setParams] = useState({});
    const [page, setPage] = useState(1)
    const {jobs,loading,error, hasNextPage} = GithubJobsState(params,page)

    function handleParamChange(e){
      const param=e.target.name
      const value = e.target.value
      //every time that we search for a value we need to come back to page 1
      setPage(1)
      setParams(prevParams => {
        return { ...prevParams, [param]: value}
      })
    }
  
    return (
      <Container className="my-4">
      <h1 className="mb-4">GitHub Jobs</h1>
                <SearchJob params={params} onParamChange= {handleParamChange}></SearchJob>
                <JobPagination page={page} setPage={setPage} hasNextPage={hasNextPage}/>
                {loading && <Spinner></Spinner>}
                {error && <h1>Error....</h1>}
                {jobs.map(job => {
                  return <Job key={job.id} job={job}/>
                })}
                <JobPagination page={page} setPage={setPage} hasNextPage={hasNextPage}/>
      </Container>
    );
  }
  



export default Jobs



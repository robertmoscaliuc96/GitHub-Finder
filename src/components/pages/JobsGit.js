import React, {useState} from 'react';
import useFetchJobs from '../context/githubjobs/fetchJobs'
import Job from "../jobs/Job"
import {Container} from 'react-bootstrap'


function JobsGit() {

  const [params,setParams] = useState({});
  const [page, setPage] = useState(1)
  const {jobs,loading,error} = useFetchJobs(params,page)

  return (
    <Container>
    <h1>HI</h1>
              {loading && <h1>Loading...</h1>}
              {error && <h1>Error....</h1>}
              {jobs.map(job => {
                return <Job key={job.id} job={job}/>
              })}
    </Container>
  );
}

export default JobsGit










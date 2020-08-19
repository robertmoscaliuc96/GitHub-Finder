import React, {Component} from 'react';
import JobItem from './JobItem'
// import githubJobsReducer from '../context/githubjobs/githubJobsReducer';

class Jobs extends Component {


    render() {
        return(
            <div style= {userStyle}>
                {this.props.jobs.map(job=>(
                    <JobItem key={job.id} job={job}/>
                ))}

            </div>
        )
    }
}

const userStyle = {
    display: "grid",
    gridTemplateColums: "repeat(3,1fr)",
    gridGap: "1rem"
}


export default Jobs



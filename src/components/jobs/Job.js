import React, {useContext} from 'react';
import GithubJobsContext from '../context/githubjobs/githubJobsContext'


const Job = ({job}) => {

    //const githubJobsContext= useContext(GithubJobsContext);


    return (
        <div>
            {job.title}
        </div>
    )
}
export default Job
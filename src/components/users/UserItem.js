import React from 'react'
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

const UserItem = ({user:{login,avatar_url}})=>{
 
        // to avoid repeating this state we destructured the state 
        // const {login,avatar_url,html_url}=props.user;
        //
        return (
            <div className="card text-center">
                <img src={avatar_url} alt="" className="round-img" style={{width:"60px"}}/>
                    <h3 className=''>{login}</h3>
                    <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">More</Link>
            </div>
        )
    };

    UserItem.propTypes = {
        user: PropTypes.object.isRequired,
/*         login: PropTypes.string.isRequired,
        avatar_url: PropTypes.string.isRequired,
        html_url: PropTypes.string.isRequired */
}

export default UserItem

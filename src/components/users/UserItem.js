import React from 'react'
import PropTypes from "prop-types";

const UserItem = ({user:{login,avatar_url,html_url}})=>{
 
        // to avoid repeating this state we destructured the state 
        // const {login,avatar_url,html_url}=props.user;
        //
        return (
            <div className="card text-center">
                <img src={avatar_url} alt="" className="round-img" style={{width:"60px"}}/>
                    <h3 className=''>{login}</h3>
                    <a href={html_url} className="btn btn-dark btn-sm my-1">More</a>
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

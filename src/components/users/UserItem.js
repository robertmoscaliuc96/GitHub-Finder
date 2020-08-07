import React, { Component } from 'react'

class UserItem extends Component {
 
    render() {
        // to avoid repeating this state we destructured the state 
        const {login,avatar_url,html_url}=this.props.user;
        //
        return (
            <div className="card text-center">
                <img src={avatar_url} alt="" className="round-img" style={{width:"60px"}}/>
                    <h3 className=''>{login}</h3>
                    <a href={html_url} className="btn btn-dark btn-sm my-1">More</a>
            </div>
        )
    }
}

export default UserItem

import React, { Component } from 'react'

 class JobItem extends Component {

    render() {
        const {title, company_logo} = this.props.jobs
        return (
            <div className="card text-center">
                <img src={company_logo} alt="" className="round-img" style={{width: "60px" }}/>
                <h3>{title}</h3>

            </div>
        )
    }
}
export default JobItem
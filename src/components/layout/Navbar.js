import React from 'react';
import PropTypes from "prop-types";
import {Link} from 'react-router-dom'

const Navbar = ({icon,title}) => {

        return (
            <div className="navbar">
                <h1 className="title">
                 <i className={icon} /> {title}
                </h1>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/jobs">Jobs</Link>
                    </li>
                </ul>
            </div>
        )
    }

// this is how to do with functional components
Navbar.defaultProps= {
    title:"GitHub Finder",
    icon: "fab fa-github"
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}
export default Navbar

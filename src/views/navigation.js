import React from "react";
import '../styles/navigation.scss';
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";


class Nav extends React.Component {

    render() {
        return(
            <div className="topnav">
                {/* <a class="active" href="#home">Home</a>
                <a href="/Job">Job</a>
                <a href="/About">About</a> */}
                <NavLink to='/' activeClassName="active" exact={true}>Home</NavLink>
                <NavLink to='/Job'>Job</NavLink>
                <NavLink to='/About'>About</NavLink>
                <NavLink to='/Users' exact={true}>Users</NavLink>
            </div>
        )
    }
};

export default Nav;
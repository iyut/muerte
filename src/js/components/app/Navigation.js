import React from "react";
import { IndexLink, Link } from "react-router";

export default class Navigation extends React.Component {
    render(){
      return (
        <nav className="menubar" role="navigation">

          <ul className="list-inline menubar-nav">
            <li>
              <IndexLink to="/">Home</IndexLink>
            </li>
            <li>
              <Link to="register">Register</Link>
            </li>
          </ul>

        </nav>
      )
    }
}

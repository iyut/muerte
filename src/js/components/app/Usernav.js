import React from "react";
import { observer } from "mobx-react";
import { IndexLink, Link } from "react-router";

@observer
export default class Usernav extends React.Component {

  static contextTypes = {
    router : React.PropTypes.object.isRequired,
    store : React.PropTypes.object.isRequired
  };

  logout(){
    const { auth } = this.context.store; // this is our 'Auth' store, same observable instance used by the `routes.js
    
    if(auth.isLoggedIn){
        auth.logout();
        this.context.router.push("/login");
    }
  }

  render() {
    const { location } = this.props;

    return (

      <div className="usernav pull-right">
        <a href="#" className="usernav-toggle">
          <span className="usernav-toggle-bg"></span>
        </a>
        <ul className="usernav-lists">
          <li className="usernav-lists-link"></li>
          <li className="usernav-lists-link"></li>
          <li className="usernav-lists-link"></li>
          <li className="usernav-lists-link">
            <button onClick={this.logout.bind(this)}>Logout</button>
          </li>
        </ul>
      </div>

    );
  }
}

import React from "react";

export default class Usernav extends React.Component {

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
            <a href="#" className="usernav-lists-anchor"></a>
          </li>
        </ul>
      </div>

    );
  }
}

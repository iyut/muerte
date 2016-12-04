import React from "react";
import Topsearch from "./Topsearch";
import Usernav from "./Usernav";

export default class Header extends React.Component {

  render() {
    const { location } = this.props;

    return (
      <header className="outertop">
        <div className="outerheader">
          <div className="container-fluid">
            <div className="row">

              <div className="col-xs-12 col-md-1 logo">
                <img src="./images/logo.png" alt="Muerte" className="logoimg img-responsive" />
              </div>

              <div className="col-xs-6 col-md-8 topmiddlecontainer">
                <div className="topmenutoggle pull-left">
                  <a href="#" className="topmenutoggle-button"><span className="glyphicon glyphicon-menu-hamburger"></span></a>
                </div>

                <Topsearch />

                <div className="clearfix"></div>
              </div>

              <div className="col-xs-6 col-md-3 usernavcontainer">

                <Usernav />

                <div className="clearfix"></div>
              </div>

            </div>
          </div>
        </div>
      </header>
    );
  }
}

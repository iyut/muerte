import React from "react";

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
                <div className="topsearch">
                  <form className="topsearch-form">
                    <button className="topsearch-form-button pull-right"><span className="glyphicon glyphicon-search"></span></button>
                    <div className="topsearch-form-field">
                      <input type="text" className="topsearch-form-input" value="" />
                    </div>
                    <div className="clearfix"></div>
                  </form>
                </div>
                <div className="clearfix"></div>
              </div>

              <div className="col-xs-6 col-md-3 usernavcontainer">
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
                <div className="clearfix"></div>
              </div>

            </div>
          </div>
        </div>
      </header>
    );
  }
}

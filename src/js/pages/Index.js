import React from "react"
import { Link } from "react-router"

import Header from "../components/index/Header"
import Navigation from "../components/index/Navigation"
import Footer from "../components/index/Footer"

export default class Index extends React.Component {
  render(){
    return (
      <div className="outercontainer">
        <Header />
        <div className="outermiddle">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-12 col-md-2">
                <Navigation />
              </div>
              <div className="content-children">
                {this.props.children}
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}

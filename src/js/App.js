import React from "react"
import { Link } from "react-router"

import Auth from "./stores/Auth"
import Header from "./components/app/Header"
import Navigation from "./components/app/Navigation"
import Footer from "./components/app/Footer"

export default class App extends React.Component {

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  static childContextTypes = {
    store: React.PropTypes.object
  };

  getChildContext() {
    /**
     * Register stores to be passed down to components
     */
    return {
      store: {
        auth: Auth
      }
    };
  }

  componentWillMount() {
    if (!Auth.isLoggedIn) {
      this.context.router.push('/login');
    }
  }

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

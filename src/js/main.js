import "bootstrap/dist/css/bootstrap.css"
import "../css/main.css"

import React from "react"
import ReactDOM from "react-dom"
import {Router, Route, IndexRoute, hashHistory} from "react-router"

import App from "./App";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Todos from "./pages/Todos";
import Auth from "./stores/Auth";

const application = document.getElementById("app");

function authRequired(nextState, replace) {
  if (!Auth.isLoggedIn) {
    replace('/login');
  }
}

function noAuthRequired(nextState, replace) {
  if (Auth.isLoggedIn){
    replace('/');
  }
}

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute onEnter={authRequired} component={Home}></IndexRoute>
      <Route name="login" path="/login" onEnter={noAuthRequired} component={Login}></Route>
      <Route name="register" path="/register" onEnter={noAuthRequired} component={Register}></Route>
      <Route name="todos" path="/todos" component={Todos}></Route>
    </Route>
  </Router>, application)

import "bootstrap/dist/css/bootstrap.css"
import "../css/main.css"

import React from "react"
import ReactDOM from "react-dom"
import {Router, Route, IndexRoute, hashHistory} from "react-router"

import Index from "./pages/Index";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Todos from "./pages/Todos";

const app = document.getElementById("app")

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Index}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="/register" component={Register}></Route>
      <Route path="/todos" component={Todos}></Route>
    </Route>
  </Router>, app)

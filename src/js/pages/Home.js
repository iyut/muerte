import React from "react";

import Login from "../components/home/Login";
import LoginStore from "../components/home/LoginStore";

export default class Home extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <Login store={LoginStore} />
      </div>
    );
  }
}

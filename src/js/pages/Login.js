import React from "react";

import LoginForm from "../components/login/Login";
import Auth from "../stores/Auth";

export default class Login extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <LoginForm />
      </div>
    );
  }
}

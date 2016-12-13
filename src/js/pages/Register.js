import React from "react";

import RegisterForm from "../components/register/Register";
import RegisterStore from "../components/register/RegisterStore";

export default class Register extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Todos</h1>
        <RegisterForm store={RegisterStore} />
      </div>
    );
  }
}

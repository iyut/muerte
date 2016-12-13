import React from "react"
import { observer } from "mobx-react"


@observer
export default class LoginForm extends React.Component {

  static contextTypes = {
    router : React.PropTypes.object.isRequired,
    store : React.PropTypes.object.isRequired
  };

  sendData(e) {
    const { auth } = this.context.store; // this is our 'Auth' store, same observable instance used by the `routes.js`

    auth.login(this.refs.email.value.trim() , this.refs.password.value.trim() )
      .then(() => { 
        if (auth.isLoggedIn) this.context.router.push('/');
      })
      .catch((err) => {
        console.log(err);
      });

    e.preventDefault();
  }

  render() {

    return (
      <div>
        <input type="text" ref="email" className="" />
        <input type="password" ref="password" className="" />
        <button className="button" onClick={this.sendData.bind(this)}>Send</button>
      </div>
    )
  }
}

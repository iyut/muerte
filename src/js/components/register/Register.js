import React from "react"
import { observer } from "mobx-react"


@observer
export default class Register extends React.Component {

  storeUsername(e) {
    this.props.store.data.username = e.target.value;
  }

  storeFirstname(e) {
    this.props.store.data.firstname = e.target.value;
  }

  storeLastname(e) {
    this.props.store.data.lastname = e.target.value;
  }

  storeEmail(e) {
    this.props.store.data.email = e.target.value;
  }

  storePassword(e) {
    this.props.store.data.password = e.target.value;
  }

  render() {
    const { data, sendData } = this.props.store;

    return (
      <div>
        <input type="text" className="txtusername" onChange={this.storeUsername.bind(this)} />
        <input type="text" className="txtfirstname" onChange={this.storeFirstname.bind(this)} />
        <input type="text" className="txtlastname" onChange={this.storeLastname.bind(this)} />
        <input type="text" className="txtemail" onChange={this.storeEmail.bind(this)} />
        <input type="password" className="txtpassword" onChange={this.storePassword.bind(this)} />
        <button className="button" onClick={sendData}>Send</button>
      </div>
    )
  }
}

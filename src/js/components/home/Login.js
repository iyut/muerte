import React from "react"
import { observer } from "mobx-react"


@observer
export default class Login extends React.Component {

  storeUsername(e) {
    this.props.store.data.username = e.target.value;
  }

  storePassword(e) {
    this.props.store.data.password = e.target.value;
  }

  render() {
    const {data, sendData } = this.props.store;

    return (
      <div>
        <input type="text" className="" onChange={this.storeUsername.bind(this)} />
        <input type="password" className="" onChange={this.storePassword.bind(this)} />
        <button className="button" onClick={sendData}>Send</button>
      </div>
    )
  }
}

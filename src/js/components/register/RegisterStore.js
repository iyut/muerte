import { computed, observable } from "mobx"
import axios from "axios"

export class RegisterStore {

  @observable data

  constructor(){
    this.data = {
      username : '',
      firstname : '',
      lastname : '',
      email : '',
      password : ''
    };
  }

  sendData = () => {
    console.log(this.data);
    var sender = axios.create({
      baseURL: 'http://localhost:5001/',
      timeout: 1000
    });
    sender.post("users/register",{
      data : {
        "firstname": this.data.username,
        "lastname": this.data.lastname,
        "email" : this.data.email,
        "password" : this.data.password
      }
    }).then( (response) => {
      console.log(response);
    }).catch( (error) => {
      console.log(error);
    });
  }
}

export default new RegisterStore

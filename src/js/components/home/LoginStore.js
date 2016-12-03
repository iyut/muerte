import { observable } from "mobx"

export class UserStore {
  @observable data;

  constructor(){
    this.data = {
       email : '',
      password : ''
    };
  }

  sendData = () => {

    var sender = axios.create({
      baseURL: 'http://localhost:5001/',
      timeout: 1000
    });
    sender.post("users/login",{
      data : {
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

export default new UserStore

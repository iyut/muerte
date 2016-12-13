import axios from "axios";
import { observable, computed } from 'mobx';
import jwt from 'jsonwebtoken';
import singleton from 'singleton';

import Storage from '../services/Storage';

class Auth extends singleton {
  @observable user = null;
  @computed get isLoggedIn() {
    return !!this.user;
  }

  hostapi = axios.create({
    baseURL: 'http://localhost:5001/',
    timeout: 1000
  });

  constructor() {
    super();

    const token = Storage.get('token');

    // if (token) {
    //   this.user = jwt.verify(token, "muerte");
    // }
  }

  login(email, password) {
    return this.hostapi.post("users/login", {
      data : {
        "email" : email,
        "password" : password
      }
    })
    .then((res) => {
      this.user = res.data.data.user;
      Storage.set('token', res.data.data.token);
      return res;
    });
  }

  logout() {
    this.user = null;
    Storage.remove('token');
  }
}

export default Auth.get();

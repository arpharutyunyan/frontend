import axios from "axios";

const { REACT_APP_API_URL } = process.env;

const api = axios.create({
  baseURL: REACT_APP_API_URL,
})

class Api {

  static register(data) {
    return api.post('/users/register', data);
  }

  static login(data) {
    return api.post('/users/login', data);
  }

  static profile(data) {
    return api.get('/users/profile', data);
  }

  static singleUser(userId) {
    return api.get(`/users/single/${userId}`);
  }

  static usersList(params) {
    return api.get(`/users`, { params });
  }

}

export default Api;

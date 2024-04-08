import axios from "axios";
import toFirmData from "object-to-formdata";

const { REACT_APP_API_URL } = process.env;

const api = axios.create({
  baseURL: REACT_APP_API_URL,
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.authorization = `Bearer ${token}`
  }
  return config;
}, (err) => Promise.reject(err))

api.interceptors.response.use((config) => config, (err) => {
  if (err.response.status === 401) {
    localStorage.removeItem('token');
    window.location.href = '/login';
  }
  return Promise.reject(err)
})

class Api {

  static register(data) {
    return api.post('/users/register', data);
  }

  static login(data) {
    return api.post('/users/login', data);
  }

  static profile() {
    return api.get('/users/profile',);
  }

  static singleUser(userId) {
    return api.get(`/users/single/${userId}`);
  }

  static sendMessage(data) {
    return api.post(`/messages/send`, data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    });
  }

  static messagesList(friendId, params = {}) {
    return api.get(`/messages/list/${friendId}`, {
      params
    });
  }

  static #usersListController;

  static usersList(params) {
    if (this.#usersListController) {
      this.#usersListController.abort()
    }
    this.#usersListController = new AbortController();
    return api.get(`/users/list`, {
      params,
      signal: this.#usersListController.signal
    });
  }

}

export default Api;

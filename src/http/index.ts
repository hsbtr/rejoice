import Axios from "axios";

const NODE_ENV = process.env.NODE_ENV;

const http = Axios.create({
  baseURL: "/api/"
});

if (NODE_ENV === "development") {
  http.defaults.baseURL = "/api/";
}
http.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export default http;

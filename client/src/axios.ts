import _axios from "axios";

const axios = _axios.create({
  baseURL: process.env.API_URL,
  headers: { 'X-Axios': true }
});

export default axios;

/// <reference types="vite/client" />

import axios from "axios";
const host =
  window.location.hostname === "localhost"
    ? `http://{${import.meta.env.VITE_API_URL}}`
    : import.meta.env.VITE_API_URL;

const instance = axios.create({
  baseURL: host,
  withCredentials: true,
});

export default instance;

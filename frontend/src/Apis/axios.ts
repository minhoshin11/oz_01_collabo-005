/// <reference types="vite/client" />

import axios from "axios";
const host =
  window.location.hostname === "localhost"
    ? import.meta.env.VITE_API_URL
    : "api";

const instance = axios.create({
  baseURL: host,
  withCredentials: true,
});

export default instance;

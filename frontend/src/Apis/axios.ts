/// <reference types="vite/client" />

import axios from "axios";
const host =
  window.location.hostname === "localhost"
    ? "http://{http://ec2-13-125-225-5.ap-northeast-2.compute.amazonaws.com/}"
    : "http://ec2-13-125-225-5.ap-northeast-2.compute.amazonaws.com/";

const instance = axios.create({
  baseURL: host,
  withCredentials: true,
});

export default instance;

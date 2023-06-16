import axios from "axios";

const api = axios.create({
  baseURL: "https://api.organna.dev",
});

export { api };

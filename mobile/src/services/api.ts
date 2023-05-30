import axios from "axios";

const api = axios.create({
  baseURL: "http://10.53.22.196:3333",
});

export { api };

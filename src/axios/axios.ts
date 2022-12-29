import axios from "axios";

export const axiosRequest = axios.create({
  baseURL: "http://fakestoreapi.com/",
  timeout: 120000,
  headers: {
    "Content-Type": "application/json",
  },
});

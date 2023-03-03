import axios from "axios";

export const axiosRequest = axios.create({
  baseURL: "https://fakestoreapi.com/",
  // timeout: 120000,
  headers: {
    "Content-Type": "application/json",
  },
});

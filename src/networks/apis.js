import axios from "axios";

const config = {
  baseURL: process.env.REACT_APP_ENDPOINT,
};

export const axiosInstance = axios.create(config);

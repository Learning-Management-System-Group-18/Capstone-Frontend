import axios from "axios";

const config = {
  baseURL: "http://54.227.80.34/api/",
};

export const axiosInstance = axios.create(config);

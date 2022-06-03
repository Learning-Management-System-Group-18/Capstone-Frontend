import axios from "axios";

const config = {
  baseURL: "https://6299bdf76f8c03a9784873d7.mockapi.io/api/v1/"
};

export const axiosInstance = axios.create(config);

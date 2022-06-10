import axios from "axios";
import CONST from "../utils/constants";

const config = {
  baseURL: CONST.BASE_API,
};

export const axiosInstance = axios.create(config);

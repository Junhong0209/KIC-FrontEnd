import axios, { AxiosError, AxiosInstance } from "axios";
import { refresh } from "src/core/utils/refresh";

export const request: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER,
  timeout: 100000,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER,
});

instance.interceptors.request.use(refresh);

instance.interceptors.response.use(
  function (res) {
    return res;
  },
  function (err: AxiosError) {
    return Promise.reject(err);
  }
);

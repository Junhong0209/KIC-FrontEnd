import { AxiosRequestConfig } from "axios";

export const refresh = async (config: any): Promise<AxiosRequestConfig> => {
  let accessToken = sessionStorage.getItem('access_token');

  config.headers["Access-Control-Allow-Origin"] = '*';
  config.headers["Authorization"] = `Bearer ${accessToken}`;

  return config;
};
import axios from "axios";
import { parseCookies } from "nookies";

export function getApiClient(ctx?: any){
    const { "nextauth.token": token } = parseCookies(ctx);
    
    const api = axios.create({
      baseURL: "http://127.0.0.1:3333/api/",
    });

    if (token) {
      // api.defaults.headers["Authorization"] = `Bearer ${token}`;
      api.interceptors.request.use((config) => {
        config.headers = {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        };

        return config;
      });
    }

    return api;
}

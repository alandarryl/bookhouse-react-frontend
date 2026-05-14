import { URLS } from "../urls/urls";
import axios from "axios";

const api = axios.create({
    baseURL: URLS.BASE_URL,
    withCredentials: true
});

export default api;

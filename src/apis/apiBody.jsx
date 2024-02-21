import axios from "axios";

export const URL = "https://rimac-front-end-challenge.netlify.app/api";

export const apiBody = axios.create({
  baseURL: URL,
});
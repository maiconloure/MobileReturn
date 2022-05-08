import axios from "axios";

export const api = axios.create({
  baseURL: "http://fba2-138-97-138-138.ngrok.io"
})
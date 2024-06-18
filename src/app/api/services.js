import axios from "axios";

const base_url = "http://localhost:5000/api";

const apiClient = axios.create({
  baseURL: base_url,
  headers: { "Content-Type": "application/json" },
  withCredentials: "true",
});

const get = (url, config = {}) => {
  return apiClient.get(url, config);
};

const post = (url, config = {}) => {
  return apiClient.post(url, config);
};

const del = (url, config = {}) => {
  return apiClient.delete(url, config);
};

const put = (url, config = {}) => {
  return apiClient.put(url, config);
};

export default apiClient;

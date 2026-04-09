import axios from "axios";

export const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error);
    const message =
      error.response?.data?.message ||
      error.message ||
      "Something went wrong";

    return Promise.reject(new Error(message));
  }
);
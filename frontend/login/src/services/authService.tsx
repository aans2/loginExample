import axios from "axios";

const API_URL = "http://localhost:8080/auth/";
const API_URL_USER = "http://localhost:8080/users/";

const register = (email: any, password: any) => {
  return axios.post(API_URL_USER, {
    email,
    password,
  });
};

const login = async (email: any, password: any) => {
  const response = await axios.post(API_URL, {
    email,
    password,
  });
  if (response.data.accessToken) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user") || "{}");
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};

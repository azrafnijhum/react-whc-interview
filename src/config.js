import axios from "axios";
export const baseUrl = "https://wehostclub.us/react_interview/public/api";

export const Axios = axios.create({
  baseURL: baseUrl,
});

// Setting token in local storage
export const setTokenToLocalStorage = token => {
  localStorage.setItem("token", token);
};

export const getTokenFromLocalStorage = token => {
  return localStorage.getItem("token");
};

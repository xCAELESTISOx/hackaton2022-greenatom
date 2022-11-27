import initAxios from "axios";

export const API_URL = "http://10.131.56.252:3000/";

const axios = initAxios.create({
   baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
});

const setToken = () => {
   const token = localStorage.getItem("token");

   if (token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
   }
};

export { axios, setToken };

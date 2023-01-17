import axios from "axios";

export const getTodos = () => {
  return axios.get(`https://mock-server-kkz2.onrender.com/login2`);
};
export const getcart = () => {
    return axios.get(`https://mock-server-kkz2.onrender.com/cart`);
  };

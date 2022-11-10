import axios from "axios";

export const getTodos = () => {
  return axios.get(`https://thawing-eyrie-70822.herokuapp.com/api/login2`);
};

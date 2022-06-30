import axios from 'axios';
export const checkUserExist = () => {
  return axios.get(`/dummys/user.json/`).then((res) => res.data);
};

import axios from 'axios';
export const checkUserExist = () => {
  return axios.get(`/dummys/user.json/`).then((res) => res.data);
};

export const addUser = (data: { phonenumber: string }) => {
  return axios.post(`/dummys/user.json/`, data).then((res) => res.data);
};

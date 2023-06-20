import axios from 'axios';

// TODO: API 연결
// TODO: env
export const addCommentById = (id) => {
  return axios.post(`${process.env.REACT_APP_API}`);
};

export const getCommentListById = (id) => {
  return axios.post(`${process.env.REACT_APP_API}`);
};

export const deleteCommentById = (id) => {
  return axios.post(`${process.env.REACT_APP_API}`);
};

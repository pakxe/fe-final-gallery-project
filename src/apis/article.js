import axios from 'axios';

// TODO: API 연결
// TODO: env
export const getArticleList = () => {
  return axios.post(`${process.env.REACT_APP_API}`);
};

export const getArticleContentsById = (id) => {
  return axios.post(`${process.env.REACT_APP_API}`);
};

import axios from 'axios';

export const getArticleList = async () => {
  return await axios.get(`${process.env.REACT_APP_API}/imageAll`);
};

export const getArticleListLength = async () => {
  return await axios.get(`${process.env.REACT_APP_API}/imageSize`);
};

// export const getArticleContentsById = (id) => {
//   return axios.post(`${process.env.REACT_APP_API}`);
// };

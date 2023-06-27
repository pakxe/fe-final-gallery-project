import axios from 'axios';

export const postCommentById = async (id, content) => {
  return await axios.post(`${process.env.REACT_APP_API}/image${id}/comments`, {
    commentBody: content,
  });
};

export const getCommentListById = async (id) => {
  return await axios.get(`${process.env.REACT_APP_API}/image${id}/comments`);
};

export const deleteCommentById = async (articleId, commentId) => {
  return await axios.delete(`${process.env.REACT_APP_API}/image${articleId}/comments/${commentId}`);
};

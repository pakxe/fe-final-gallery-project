import React from 'react';
import SelectedArticle from '../components/SelectedArticle/SelectedArticle';
import { styled } from 'styled-components';
import AddComment from '../components/AddComment/AddComment';
import CommentList from '../components/CommentList/CommentList';

const ArticleWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

// id를 받아서
const ArticlePage = (props) => {
  return (
    <ArticleWrapper>
      <SelectedArticle id={props.id} />
      <AddComment />
      <CommentList />
    </ArticleWrapper>
  );
};

export default ArticlePage;

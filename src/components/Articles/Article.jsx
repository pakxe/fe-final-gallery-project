import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import Typo from '../Typo/Typo';
import Margin from '../Margin/Margin';
import { useNavigate } from 'react-router-dom';

const ArticleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5px;
  cursor: pointer;
`;

const ArticleImage = styled.img`
  width: 100%;
  height: 100%;

  @media (min-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

const Article = (props) => {
  const navigate = useNavigate();

  return (
    <ArticleWrapper>
      <ArticleImage src={props.image} onClick={() => navigate(`/article/${props.id}`)} />
      <Margin height='5' />
      <Typo title>{props.title}</Typo>
      <Typo color='gray'>{props.contents}</Typo>
    </ArticleWrapper>
  );
};

export default Article;

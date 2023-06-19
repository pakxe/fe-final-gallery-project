import React, { useEffect, useState } from 'react';
import lion from '../../assets/lion.png';
import Article from './Article';
import { styled } from 'styled-components';

const ArticlesWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Articles = () => {
  const [articleList, setArticleList] = useState([]);

  // TODO: 데이터 받아오기
  useEffect(() => {
    const temp = new Array(8).fill(0).map((_, i) => i);

    setArticleList(temp);
  }, []);

  return (
    <ArticlesWrapper>
      {articleList.map((_, index) => (
        <Article image={lion} title='사자' contents='hihi' id={index} />
      ))}
    </ArticlesWrapper>
  );
};

export default Articles;

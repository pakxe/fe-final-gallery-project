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
  // TODO: 하드 코딩 제거
  useEffect(() => {
    const temp = new Array(8).fill(0).map((_, i) => `이미지 제목${i + 1}`);

    setArticleList(temp);
  }, []);

  // TODO: 하드 코딩 제거
  return (
    <ArticlesWrapper>
      {articleList.map((_, index) => (
        <Article image={lion} title={_} contents='이미지 설명' id={index} />
      ))}
    </ArticlesWrapper>
  );
};

export default Articles;

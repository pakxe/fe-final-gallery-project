import React from 'react';
import lion from '../../assets/lion.png';
import { styled } from 'styled-components';
import Typo from '../Typo/Typo';
import Margin from '../Margin/Margin';
import Flex from '../Flex/Flex';

const TitleWrapper = styled(Flex)`
  /* width: 90%; */
  justify-content: start;
  flex-direction: column;
  align-items: start;
  padding: 20px 0;
`;

const ArticleInfoWrapper = styled(Flex)`
  width: 100%;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const MainImage = styled.img`
  width: 100%;
  height: 100%;
`;

// TODO: props로 article id 받기
const SelectedArticle = (props) => {
  // TODO: article id로 상세 정보 불러오기

  return (
    <>
      <ArticleInfoWrapper>
        <TitleWrapper>
          <Typo largeTitle>받아온 데이터로 제목</Typo>
          <Margin height='8' />
          <Typo>받아온 데이터로 제목</Typo>
        </TitleWrapper>

        <Typo>댓글 6개</Typo>
      </ArticleInfoWrapper>

      <MainImage src={lion} />
    </>
  );
};

export default SelectedArticle;

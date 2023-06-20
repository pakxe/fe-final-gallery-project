import React from 'react';
import lion from '../../assets/lion.png';
import { styled } from 'styled-components';
import Typo from '../Typo/Typo';
import Margin from '../Margin/Margin';

const TitleWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: start;
  flex-direction: column;
  padding: 20px 0;

  @media (min-width: 768px) {
    width: 74%;
  }
`;

const MainImage = styled.img`
  width: 80%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

// TODO: props로 article id 받기
const SelectedArticle = (props) => {
  // TODO: article id로 상세 정보 불러오기

  return (
    <>
      <TitleWrapper>
        <Typo largeTitle>받아온 데이터로 제목</Typo>
        <Margin height='8' />
        <Typo>받아온 데이터로 제목</Typo>
      </TitleWrapper>

      <MainImage src={lion} />
    </>
  );
};

export default SelectedArticle;

import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import lionImage from '../../assets/lion.png';
import Typo from '../Typo/Typo';
import Margin from '../Margin/Margin';
import { getArticleListLength } from '../../apis/article';

const ProfileImage = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50px;
`;

const ProfileWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;

const Profile = () => {
  const [articleListLength, setArticleListLength] = useState([]);

  useEffect(() => {
    getArticleListLength().then((res) => {
      setArticleListLength(res.data);
    });
  }, []);

  return (
    <ProfileWrapper>
      <ProfileImage src={lionImage} />
      <Margin width='20' />

      <div>
        <Typo largeTitle>likelion_11th_frontend</Typo>
        <Typo>멋쟁이사자처럼 11기 여러분의 소중한 추억들을 보관합니다.😎</Typo>
        <Margin height='16' />
        <Typo bold>게시물 {articleListLength}개</Typo>
      </div>
    </ProfileWrapper>
  );
};

export default Profile;

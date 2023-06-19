import React from 'react';
import { styled } from 'styled-components';
import lionImage from '../../assets/lion.png';
import Typo from '../Typo/Typo';
import Margin from '../Margin/Margin';

const ProfileImage = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50px;
`;

const ProfileWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;

const Profile = (props) => {
  return (
    <ProfileWrapper>
      <ProfileImage src={lionImage} />
      <Margin width='20' />

      <div>
        <Typo largeTitle>likelion_11th_frontend</Typo>
        <Typo>멋쟁이사자처럼 11기 여러분의 소중한 추억들을 보관합니다.😎</Typo>
        <Margin height='16' />
        <Typo bold>게시물 {props.articleCount}개</Typo>
      </div>
    </ProfileWrapper>
  );
};

export default Profile;

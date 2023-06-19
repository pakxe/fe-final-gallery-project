import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import Margin from '../components/Margin/Margin';
import kiki from '../assets/kiki.png';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ReturnButton = styled.button`
  border: none;
  background-color: ${(props) => props.theme.colors.blue};
  color: white;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #323b92;
  }
`;

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <div>이상한 곳으로 와버린 그대... 왔던 곳으로 다시 돌아가십숑</div>
      <img src={kiki}></img>
      <div>캬오오</div>

      <Margin height='16' />
      <ReturnButton onClick={() => navigate(-1)}>왔던 곳으로 다시 돌아가기 !</ReturnButton>
    </Wrapper>
  );
};

export default ErrorPage;

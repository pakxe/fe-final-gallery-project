import React from 'react';
import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';

const BackGround = styled.div`
  width: 768px;
  height: 100vh;
  border: 1px solid black;
`;

const Layout = () => {
  return (
    <BackGround>
      <Outlet />
    </BackGround>
  );
};

export default Layout;

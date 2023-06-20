import React from 'react';
import { css, styled } from 'styled-components';
import Typo from '../Typo/Typo';

const buttonType = (type) => {
  if (type === 'submit') {
    return css`
      padding: 10px 14px;
      color: ${(props) => props.theme.colors.blue};
      font-weight: 600;
    `;
  }
  if (type === 'sub') {
    return css`
      padding: 8px 12px;
      color: ${(props) => props.theme.colors.gray};
    `;
  }
};

const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  ${(props) => buttonType(props.type)};
`;

// submit, sub 타입을 받아서 반환하기.
const Button = (props) => {
  return <StyledButton type={props.type}>{props.children}</StyledButton>;
};

export default Button;

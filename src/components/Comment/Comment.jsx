import React from 'react';
import Typo from '../Typo/Typo';
import { styled } from 'styled-components';
import Flex from '../Flex/Flex';
import Button from '../Button/Button';
import Margin from '../Margin/Margin';

const CommentWrapper = styled(Flex)`
  justify-content: space-between;
  padding-left: 16px;
`;

const CommentSubWrapper = styled(Flex)``;

const Comment = ({ id, children }) => {
  // TODO: onClick 으로삭제

  return (
    <CommentWrapper>
      <CommentSubWrapper>
        <Typo bold>익명</Typo>
        <Margin width='12' />
        <Typo>{children}</Typo>
      </CommentSubWrapper>
      <Button type='sub'>삭제</Button>
    </CommentWrapper>
  );
};

export default Comment;

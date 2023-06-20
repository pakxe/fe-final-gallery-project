import React, { useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import HorizontalLine from '../HorizontalLine/HorizontalLine';
import { styled } from 'styled-components';

const AddCommentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.colors.lightGray};
`;

// id props
const AddComment = (props) => {
  const [comment, setComment] = useState('');

  const handleComment = ({ target }) => {
    setComment(target.value);
  };

  // TODO: 아이디 받아서 댓글 게시하는..

  return (
    <>
      <AddCommentWrapper>
        <Input value={comment} onChange={handleComment} placeholder='댓글 작성...' />
        <Button type='submit'>게시</Button>
      </AddCommentWrapper>
    </>
  );
};

export default AddComment;

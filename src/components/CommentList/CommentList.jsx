import React, { useState } from 'react';
import ListContainer from '../ListContainer/ListContainer';
import Comment from '../Comment/Comment';
import { styled } from 'styled-components';

const CommentListWrapper = styled.div`
  padding-top: 14px;
  width: 100%;
  padding-bottom: 50px; // 여유 공간
`;

const CommentList = (props) => {
  // TODO: id로 댓글 리스트 불러오기
  const [list, _] = useState(new Array(8).fill(0).map((_, i) => i));

  return (
    <CommentListWrapper>
      <ListContainer elements={list} renderProp={(element) => <Comment>{element}</Comment>} />
    </CommentListWrapper>
  );
};

export default CommentList;

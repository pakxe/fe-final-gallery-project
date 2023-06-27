import React, { useEffect, useState } from 'react';
import lion from '../../assets/lion.png';
import { styled } from 'styled-components';
import Typo from '../Typo/Typo';
import Margin from '../Margin/Margin';
import Flex from '../Flex/Flex';
import { getArticleList } from '../../apis/article';
import { getCommentListById } from '../../apis/comment';

const TitleWrapper = styled(Flex)`
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
`;

const SelectedArticle = (props) => {
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);

  // TODO: 함수이름

  useEffect(() => {
    getArticleList().then((res) => {
      // 게시글 리스트 받아오기
      const curArticle = res.data.filter((article) => article.id === `image${props.id}`)[0];

      // 리스트에서 현재 선택된 게시글을 id로 찾기
      setArticle(curArticle);
    });
    getCommentListById(props.id).then((res) => setComments(res.data));
  }, []);

  // useEffect(async () => {
  //   // 게시글 리스트 받아오기
  //   const { data } = await getArticleList();

  //   // 리스트에서 현재 선택된 게시글을 id로 찾기
  //   const curArticle = data.filter((article) => article.id === `image${props.id}`)[0];
  //   console.log(curArticle);
  //   setArticle(curArticle);
  // }, []);

  return (
    <>
      <ArticleInfoWrapper>
        <TitleWrapper>
          <Typo largeTitle>{article.imageName}</Typo>
          <Margin height='8' />
          <Typo>{article.imageText}</Typo>
        </TitleWrapper>

        <Typo>댓글 {comments.length}개</Typo>
      </ArticleInfoWrapper>

      <MainImage src={article.imageURL} />
    </>
  );
};

export default SelectedArticle;

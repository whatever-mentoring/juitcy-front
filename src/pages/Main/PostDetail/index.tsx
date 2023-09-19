import { Column, EntireContainer, Row } from 'assets/common';
import { Header } from 'components/common/Header';
import Homebar from 'components/common/Homebar';
import CardSlider from 'components/common/CardSlider';
import { Palette } from 'styles/Palette';
import { useParams } from 'react-router';
import CommentScrapInfo from 'components/PostDetail/CommentScrapInfo';
import ScrapButton from 'components/PostDetail/ScrapButton';
import CommentsBox from 'components/PostDetail/CommentsBox';
import CommentInputBox from 'components/PostDetail/CommentInputBox';
import { useState } from 'react';
import { QTitleCard, QContentCard, AnsCard } from 'components/common/Card';

export interface commentType {
  userType: number;
  text: string;
  date: string;
}

const PostDetail = () => {
  const { id } = useParams<{ id: string }>();
  const cards = [
    <QTitleCard></QTitleCard>,
    <QContentCard></QContentCard>,
    <AnsCard></AnsCard>,
    <AnsCard></AnsCard>,
    <AnsCard></AnsCard>,
  ];

  const comments: commentType[] = [
    {
      userType: 1,
      text: '댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다댓글입니다니다댓글입니다댓글입니다댓글입니다댓글입니다',
      date: '2023.09.11',
    },
    {
      userType: 2,
      text: '두 번째 댓글',
      date: '2023.09.10',
    },
    {
      userType: 2,
      text: '세 번째 댓글',
      date: '2023.09.13',
    },
    {
      userType: 1,
      text: '네 번째 댓글',
      date: '2023.09.21',
    },
    {
      userType: 1,
      text: '다섯 번째 댓글',
      date: '2023.09.23',
    },
  ];
  const [currentComments, setCurrentComments] =
    useState<commentType[]>(comments);

  return (
    <Column>
      <Header btn={'back'} borderBottom={true}>
        쥬시글
      </Header>
      {cards && (
        <EntireContainer color={Palette.Gray05}>
          <Column gap={23}>
            <CardSlider cards={cards} />
            <Row justifyContent="space-between">
              <CommentScrapInfo></CommentScrapInfo>
              <ScrapButton></ScrapButton>
            </Row>
            <CommentsBox comments={comments}></CommentsBox>
          </Column>
        </EntireContainer>
      )}
      <CommentInputBox />
    </Column>
  );
};

export default PostDetail;

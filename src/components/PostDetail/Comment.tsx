import { Column, Row } from 'assets/common';
import styled from 'styled-components';
import { Palette } from 'styles/Palette';
import commentCyni from 'assets/icons/comment-cyni.svg';
import commentJuni from 'assets/icons/comment-juni.svg';
import moreMenu from 'assets/icons/more-menu.svg';
import Typo from 'styles/Typo';
import { useState } from 'react';
import CommentModal from './CommentModal';
import { commentType } from 'types';

const Comment = ({ comment }: { comment: commentType }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(true);
  };
  return (
    <Container>
      <img
        src={comment.writer === '익명의 시니' ? commentCyni : commentJuni}
      ></img>
      <Content justifyContent="space-between">
        <Column gap={9}>
          <Row>
            <Typo.s1
              color={
                comment.writer === '익명의 시니' ? Palette.Blue : Palette.Orange
              }
            >
              {comment.writer}
            </Typo.s1>
            <DotWrapper>
              <Dot />
            </DotWrapper>
            <Typo.s2 color={Palette.Gray4}>{comment.commentDateTime}</Typo.s2>
          </Row>
          <Typo.s2 color={Palette.Gray6}>{comment.content}</Typo.s2>
        </Column>
      </Content>
      <Moremenu src={moreMenu} onClick={toggleModal}></Moremenu>
      {isModalOpen && (
        <CommentModal setIsModalOpen={setIsModalOpen} comment={comment} />
      )}
    </Container>
  );
};

export default Comment;

const Container = styled(Row)`
  width: 100%;
  align-items: flex-start;

  padding: 13px 10px;
  gap: 10px;

  border-radius: 16px;
  background: ${Palette.White};
`;
const Content = styled(Row)`
  width: 100%;
`;
const Dot = styled.div`
  width: 1.5px;
  height: 1.5px;

  border-radius: 50%;
  background: ${Palette.Gray5};
`;
const DotWrapper = styled(Row)`
height:100%

justify-content: center;
align-items: center;

margin-left : 4.5px;
margin-right: 6.5px;
`;
const Moremenu = styled.img`
  cursor: pointer;
`;

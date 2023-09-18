import { Column, Row } from 'assets/common';
import styled from 'styled-components';
import { Palette } from 'styles/Palette';
import commentCyni from 'assets/icons/comment-cyni.svg';
import commentJuni from 'assets/icons/comment-juni.svg';
import moreMenu from 'assets/icons/more-menu.svg';
import Typo from 'styles/Typo';
import { useState } from 'react';
import CommentModal from './CommentModal';

interface commentProps {
  userType: number;
  text: string;
  date: string;
}

const Comment = ({ userType, text, date }: commentProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(true);
  };
  return (
    <Container>
      <img src={userType === 1 ? commentCyni : commentJuni}></img>
      <Content justifyContent="space-between">
        <Column gap={9}>
          <Row>
            <Typo.s1 color={Palette.Main}>
              {userType === 1 ? '익명의 시니' : '익명의 주니'}
            </Typo.s1>
            <DotWrapper>
              <Dot />
            </DotWrapper>
            <Typo.s2 color={Palette.Gray4}>{date}</Typo.s2>
          </Row>
          <Typo.s2 color={Palette.Gray6}>{text}</Typo.s2>
        </Column>
      </Content>
      <Moremenu src={moreMenu} onClick={toggleModal}></Moremenu>
      {isModalOpen && <CommentModal setIsModalOpen={setIsModalOpen} />}
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

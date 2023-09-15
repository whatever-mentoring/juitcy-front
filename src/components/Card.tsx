import styled from 'styled-components';
import { Palette } from 'styles/Palette';
import answer from '@assets/icons/answer.svg';
import Typo from 'styles/Typo';
import { Column, Row } from 'assets/common';
import { ShortBtn } from './Button';

const AnsButtonCard = () => {
  return (
    <Container color={Palette.White} gap={16}>
      <QuestionInfo></QuestionInfo>
      <ShortBtn>답변하기</ShortBtn>
    </Container>
  );
};

const QuestionInfo = () => {
  return (
    <QIContainer gap={12}>
      <Column gap={9}>
        <Row gap={5}>
          <img src={answer}></img>
          <CategoryLabel>일상</CategoryLabel>
        </Row>
        <Typo.h2>
          장례식에서 조의의금을 얼마정도 하는게 좋을 장례식에서 조례금을
          얼마정도하는게 좋을까요?
        </Typo.h2>
      </Column>
      <Typo.s2 color={Palette.Gray5}>2023.09.11</Typo.s2>
    </QIContainer>
  );
};
const Container = styled(Column)<{ color: string }>`
  width: 327.4px;

  padding: 34px 24px 30px 24px;

  border-radius: 16px;
  border: 1.5px solid ${Palette.Main};
  background: ${(props) => props.color};
`;
const QIContainer = styled(Column)`
  width: 100%;
  height: 151px;
`;

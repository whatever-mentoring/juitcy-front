import styled from 'styled-components';
import { Palette } from 'styles/Palette';
import answerJuni from '@assets/icons/answer-juni.svg';
import answerCyni from '@assets/icons/answer-cyni.svg';
import questionJuni from '@assets/icons/question-juni.svg';
import questionCyni from '@assets/icons/question-cyni.svg';
import questionBlack from '@assets/icons/question-black.svg';
import defaultTag from '@assets/icons/default-tag.svg';
import Typo from 'styles/Typo';
import { Column, Row } from 'assets/common';
import { ShortBtn } from './Button';
import { CategoryLabel } from 'components/Category/CategoryLabel';
import { questionType } from 'types';
import { Ref, forwardRef } from 'react';
import { useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil';
import { questionState } from 'store/recoil/atom';

interface cardProps {
  category?: string;
  content: string;
  dateTime?: string;
}

/* Card components */

// main page
export const QTitleCard = ({ category, content, dateTime }: cardProps) => {
  return (
    <Container height={317} color={Palette.White} gap={16}>
      <Tag tagType={'question'}>
        {category !== undefined && <CategoryLabel>{category}</CategoryLabel>}
      </Tag>
      <Title>{content}</Title>
      <Date>{dateTime !== undefined ? dateTime : ''}</Date>
    </Container>
  );
};
export const QContentCard = ({ content }: cardProps) => {
  return (
    <Container height={317} color={Palette.Main05} gap={14}>
      <Tag tagType={'question'}>
        <Typo.b2>질문 내용</Typo.b2>
      </Tag>
      <ScrollBox>{content}</ScrollBox>
    </Container>
  );
};
export const AnsCard = ({ content }: cardProps) => {
  return (
    <Container height={317} color={Palette.Main15} gap={14}>
      <Tag tagType={'answer'}>
        <Typo.b2 color={Palette.Main}>익명의 시니</Typo.b2>
      </Tag>
      <ScrollBox>{content}</ScrollBox>
    </Container>
  );
};
// answer page
export const AnsButtonCard = forwardRef(
  ({ question }: { question: questionType }, ref: Ref<HTMLDivElement>) => {
    const setWriteState = useSetRecoilState(questionState);

    return (
      <ABContainer
        color={Palette.White}
        gap={16}
        height={270}
        ref={ref}
        justifyContent="space-between"
        onClick={() => {
          //질문 내용을 저장 후 클릭시 이어지는 상세 페이지에서 사용
          setWriteState({
            title: question.title,
            content: question.content,
          });
        }}
      >
        <InnerBox gap={10}>
          <Tag tagType={'question'}>
            <CategoryLabel> {question.category}</CategoryLabel>
          </Tag>
          <AnsTitle>{question.title}</AnsTitle>
          <Date>{question.dateTime}</Date>
        </InnerBox>
        <ShortBtn to={`/answer/${question.postIdx}`}>답변하기</ShortBtn>
      </ABContainer>
    );
  },
);

export const QDetailCard = () => {
  const question = useRecoilValue(questionState);

  return (
    <QDContainer color={Palette.Sub.blue} gap={20}>
      <Row gap={10}>
        <img src={questionBlack}></img>
        <Typo.h2>{question.title}</Typo.h2>
      </Row>
      <Typo.s1>{question.content}</Typo.s1>
      <Date>2023.09.11</Date>
    </QDContainer>
  );
};

/* part components */

interface tagProps {
  children: React.ReactNode;
  tagType: string;
}
const Tag = ({ children, tagType }: tagProps) => {
  const userType = window.localStorage.getItem('userType');

  let tagImg: any = defaultTag;
  switch (tagType) {
    case 'answer':
      tagImg = userType === 'Cyni' ? answerCyni : answerJuni;
      break;
    case 'question':
      tagImg = userType === 'Cyni' ? questionCyni : questionJuni;
      break;
  }

  return (
    <Row gap={5}>
      <img src={tagImg}></img>
      {children}
    </Row>
  );
};
const Date = ({ children }: { children: string }) => {
  return (
    <Typo.s2 color={Palette.Gray5} opacity={0.6}>
      {children}
    </Typo.s2>
  );
};

/* styles */

const Container = styled(Column)<{ height?: number; color: string }>`
  width: 330px;
  max-width: 100%;
  ${({ height }) => height && `height: ${height}px`};

  padding: 27px 28px;

  border-radius: 16px;
  border: 1.5px solid ${Palette.Main};
  background: ${({ color }) => color};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
const ABContainer = styled(Container)`
  height: 100%;
  padding: 30px 24px;
`;
const QDContainer = styled(Container)`
  padding: 32px 26px;
  border: none;
`;
const Title = styled(Typo.h1)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const AnsTitle = styled(Typo.h2)`
  height: 100%;
`;
const InnerBox = styled(Column)`
  height: 100%;
`;
const ScrollBox = styled(Typo.b3)`
  height: 100%;
  padding-right: 16px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    width: 9px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${Palette.Main50};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: ${Palette.Gray1};
    border-radius: 10px;
  }
`;

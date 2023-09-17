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
import { CategoryLabel } from 'components/Mypage/CategoryLabel';

/* Card components */

// main page
export const QTitleCard = () => {
  return (
    <Container height={317} color={Palette.White} gap={16}>
      <Tag tagType={'question'}>
        <CategoryLabel>일상</CategoryLabel>
      </Tag>
      <Title>글 제목입니다 글 제목입니다 글 제목입니다 글 제목입니다</Title>
      <Date>2023.09.11</Date>
    </Container>
  );
};
export const QContentCard = () => {
  return (
    <Container height={317} color={Palette.Main05} gap={14}>
      <Tag tagType={'question'}>
        <Typo.b2 color={Palette.Main}>질문 내용</Typo.b2>
      </Tag>
      <ScrollBox>
        로렘 입숨(lorem ipsum; 줄여서 립숨, lipsum)은 출판이나 그래픽 디자인
        분야에서 폰트, 타이포그래피, 레이아웃 같은 그래픽 요소나 시각적 연출을
        보여줄 때 사용하는 표준 채우기 텍스트로, 최종 결과물에 들어가는 실제적인
        문장 내용이 채워지기 전에 시각 디자인 프로젝트 모형의 채움 글로도
        이용된다. 이런 용도로 사용할 때 로렘 입숨을 그리킹(greeking)이라고도
        부르며, 때로 로렘 입숨은 공간만 차지하는 무언가를 지칭하는 용어로도
        사용된다.로렘 입숨(lorem ipsum; 줄여서 립숨, lipsum)은 출판이나 그래픽
        디자인 분야에서 폰트, 타이포그래피, 레이아웃 같은 그래픽 요소나 시각적
        연출을 보여줄 때 사용하는 표준 채우기 텍스트로, 최종 결과물에 들어가는
        실제적인 문장 내용이 채워지기 전에 시각 디자인 프로젝트 모형의 채움
        글로도 이용된다. 이런 용도로 사용할 때 로렘 입숨을
        그리킹(greeking)이라고도 부르며, 때로 로렘 입숨은 공간만 차지하는
        무언가를 지칭하는 용어로도 사용된다.로렘 입숨(lorem ipsum; 줄여서 립숨,
        lipsum)은 출판이나 그래픽 디자인 분야에서 폰트, 타이포그래피, 레이아웃
        같은 그래픽 요소나 시각적 연출을 보여줄 때 사용하는 표준 채우기
        텍스트로, 최종 결과물에 들어가는 실제적인 문장 내용이 채워지기 전에 시각
        디자인 프로젝트 모형의 채움 글로도 이용된다. 이런 용도로 사용할 때 로렘
        입숨을 그리킹(greeking)이라고도 부르며, 때로 로렘 입숨은 공간만 차지하는
        무언가를 지칭하는 용어로도 사용된다.
      </ScrollBox>
    </Container>
  );
};
export const AnsCard = () => {
  return (
    <Container height={317} color={Palette.Main15} gap={14}>
      <Tag tagType={'answer'}>
        <Typo.b2 color={Palette.Main}>익명의 시니어</Typo.b2>
      </Tag>
      <ScrollBox>
        로렘 입숨(lorem ipsum; 줄여서 립숨, lipsum)은 출판이나 그래픽 디자인
        분야에서 폰트, 타이포그래피, 레이아웃 같은 그래픽 요소나 시각적 연출을
        보여줄 때 사용하는 표준 채우기 텍스트
      </ScrollBox>
      <Date>2023.09.11</Date>
    </Container>
  );
};
// answer page
export const AnsButtonCard = () => {
  return (
    <ABContainer color={Palette.White} gap={16} height={277}>
      <Column gap={10}>
        <Tag tagType={'question'}>
          <CategoryLabel>일상</CategoryLabel>
        </Tag>
        <AnsTitle>
          장례식에서 조례금을 얼마정도하는게 좋을 장례식에서 조례금을
          얼마정도하는게 좋을까요?
        </AnsTitle>
        <Date>2023.09.11</Date>
      </Column>

      <ShortBtn>답변하기</ShortBtn>
    </ABContainer>
  );
};

export const QDetailCard = () => {
  return (
    <QDContainer color={Palette.Sub.blue} gap={20}>
      <Row gap={10}>
        <img src={questionBlack}></img>
        <Typo.h2>장례식에서 조례금을 얼마정도 하는게 좋을까요?</Typo.h2>
      </Row>
      <Typo.s1>
        로렘 입숨(lorem ipsum; 줄여서 립숨, lipsum)은 출판이나 그래픽 디자인
        분야에서 폰트, 타이포그래피, 레이아웃 같은 그래픽 요소나 시각적 연출을
        보여줄 때 사용하는 표준 채우기 텍스트로, 최종 결과물에 들어가는 실제적인
        문장 내용이 채워지기 전에 시각 디자인 프로젝트 모형의 채움 글로도
        이용된다. 이런 용도로 사용할 때 로렘 입숨을 그리킹(greeking)이라고도
        부르며, 때로 로렘 입숨은 공간만 차지하는 무언가를 지칭하는 용어로도
        사용된다.
      </Typo.s1>
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
  const userType = 1;

  let tagImg: any = defaultTag;
  switch (tagType) {
    case 'answer':
      tagImg = userType === 1 ? answerCyni : answerJuni;
      break;
    case 'question':
      tagImg = userType === 1 ? questionCyni : questionJuni;
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
  return <Typo.s2 color={Palette.Gray5}>{children}</Typo.s2>;
};

/* styles */

const Container = styled(Column)<{ height?: number; color: string }>`
  width: 330px;
  ${({ height }) => height && `height: ${height}px`};

  padding: 27px 28px;

  border-radius: 16px;
  border: 1.5px solid ${Palette.Main};
  background: ${(props) => props.color};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  cursor: pointer;
`;
const ABContainer = styled(Container)`
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
`;
const AnsTitle = styled(Typo.h2)`
  height: 100%;
`;
const Icon = styled.img`
  width: 17.8px;
  height: 17.8px;
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

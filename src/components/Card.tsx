import styled from 'styled-components';
import { Palette } from 'styles/Palette';
import answer from '@assets/icons/answer.svg';
import question from '@assets/icons/question.svg';
import questionDetail from '@assets/icons/question-detail.svg';
import Typo from 'styles/Typo';
import { Column, Row } from 'assets/common';
import { ShortBtn } from './Button';
import { CategoryLabel } from 'components/Mypage/CategoryLabel';

// Card components
export const AnsButtonCard = () => {
  return (
    <Container color={Palette.White} gap={16}>
      <QuestionInfo />
      <ShortBtn>답변하기</ShortBtn>
    </Container>
  );
};
export const QTitleCard = () => {
  return (
    <Container height={317} color={Palette.White} gap={16}>
      <QuestionInfo />
      <CommentScrapInfo />
    </Container>
  );
};
export const QContentCard = () => {
  return (
    <Container height={317} color={Palette.Main05} gap={14}>
      <Tag tagType={question}>
        <Typo.b2>질문 내용</Typo.b2>
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
export const QContentDetailCard = () => {
  return (
    <Container color={Palette.Main} gap={14}>
      <Tag tagType={questionDetail}>
        <Typo.h2 color={Palette.White}>
          장례식에서 조례금을 얼마정도 하는게 좋을까요?{' '}
        </Typo.h2>
      </Tag>
      <Typo.s1 color={Palette.White}>
        로렘 입숨(lorem ipsum; 줄여서 립숨, lipsum)은 출판이나 그래픽 디자인
        분야에서 폰트, 타이포그래피, 레이아웃 같은 그래픽 요소나 시각적 연출을
        보여줄 때 사용하는 표준 채우기 텍스트로, 최종 결과물에 들어가는 실제적인
        문장 내용이 채워지기 전에 시각 디자인 프로젝트 모형의 채움 글로도
        이용된다. 이런 용도로 사용할 때 로렘 입숨을 그리킹(greeking)이라고도
        부르며, 때로 로렘 입숨은 공간만 차지하는 무언가를 지칭하는 용어로도
        사용된다.
      </Typo.s1>
      <Typo.s2 color={Palette.Gray2}>2023.09.11</Typo.s2>
    </Container>
  );
};
export const AnsCard = () => {
  return (
    <Container height={317} color={Palette.Main15} gap={14}>
      <Tag tagType={answer}>
        <Typo.b2>익명의 시니어</Typo.b2>
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
      <Date>2023.09.11</Date>
    </Container>
  );
};

// part components
interface tagProps {
  children: React.ReactNode;
  tagType: any;
}
const Tag = ({ children, tagType }: tagProps) => {
  return (
    <Row gap={5}>
      <img src={tagType}></img>
      {children}
    </Row>
  );
};
const Date = ({ children }: { children: string }) => {
  return <Typo.s2 color={Palette.Gray5}>{children}</Typo.s2>;
};
const QuestionInfo = () => {
  return (
    <Column gap={12}>
      <Tag tagType={question}>
        <CategoryLabel>일상</CategoryLabel>
      </Tag>
      <Typo.h1>
        질문이 들어올 자리입니다. 질문이 들어올 자리입니다. 질문이 들어올
        자리입니다. 질문이 들어올 자리입니다.?
      </Typo.h1>
      <Date>2023.09.11</Date>
    </Column>
  );
};
const CommentScrapInfo = () => {
  return (
    <Row gap={8}>
      <Row gap={5} alignItems="center">
        <Icon src="img/comment.svg" />
        <Typo.b1 color={Palette.Gray4}>2222</Typo.b1>
      </Row>
      <Row gap={5} alignItems="center">
        <Icon src="img/scrap.svg" />
        <Typo.b1 color={Palette.Gray4}>2222</Typo.b1>
      </Row>
    </Row>
  );
};

// styles
const Container = styled(Column)<{ height?: number; color: string }>`
  width: 327.4px;
  ${({ height }) => height && `height: ${height}px`};

  padding: 34px;

  border-radius: 16px;
  border: 1.5px solid ${Palette.Main};
  background: ${(props) => props.color};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
const Icon = styled.img`
  width: 17.8px;
  height: 17.8px;
`;
const ScrollBox = styled(Typo.b3)`
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

import { styled } from 'styled-components';
import { Palette } from 'styles/Palette';
import Typo from 'styles/Typo';
import { Category } from './Category';

export const ScrapListBox = () => {
  return (
    <Contanier>
      <TextContainer>
        <Category>인간관계</Category>
        <Typo.b1>글 제목입니다</Typo.b1>
        <Typo.b3 color={Palette.Gray4}>
          글 내용입니다 글 내용입니다 글 내용입니다 글 내용입니다 글 내용입니다
          글 내용입니다 글 내용입니다 글 내용입니다 글내용
        </Typo.b3>
        <Row gap={7}>
          <Row gap={4}>
            <img src="img/comment.svg" />
            <Typo.s2 color={Palette.Gray4}>12</Typo.s2>
          </Row>
          <Row gap={4}>
            <img src="img/scrap.svg" />
            <Typo.s2 color={Palette.Gray4}>123</Typo.s2>
          </Row>
          <Typo.s2 color={Palette.Gray4}>2023.09.09</Typo.s2>
        </Row>
      </TextContainer>
    </Contanier>
  );
};

const Contanier = styled.div`
  width: 100%;
  height: 143px;
  padding: 14px 15px;
  border-radius: 5px;
  background: ${Palette.White};
  box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.1);
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
const Row = styled.div<{ gap?: number }>`
  display: flex;
  gap: ${({ gap }) => (gap ? gap : 0)}px;
`;

import { Palette } from 'styles/Palette';
import Typo from 'styles/Typo';
import { CategoryLabel } from './CategoryLabel';
import { MyPageBoxContainer, Row, TextContainer } from 'assets/common';

export const ScrapListBox = () => {
  return (
    <MyPageBoxContainer padding="14px 15px">
      <TextContainer gap={4}>
        <CategoryLabel>인간관계</CategoryLabel>
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
    </MyPageBoxContainer>
  );
};

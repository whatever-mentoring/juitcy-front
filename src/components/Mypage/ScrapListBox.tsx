import { Palette } from 'styles/Palette';
import Typo from 'styles/Typo';
import { MyPageBoxContainer, Row, TextContainer } from 'assets/common';
import { CategoryLabel } from 'components/CategoryLabel';

interface ScrapBoxInterface {
  children: string;
  title: string;
  date: string;
  category: string;
  commentCount: number;
  scrapCount: number;
}

export const ScrapListBox = ({
  children,
  title,
  date,
  category,
  commentCount,
  scrapCount,
}: ScrapBoxInterface) => {
  return (
    <MyPageBoxContainer padding="14px 15px">
      <TextContainer gap={4}>
        <CategoryLabel>{category}</CategoryLabel>
        <Typo.b1>{title}</Typo.b1>
        <Typo.b3 color={Palette.Gray4}>{children}</Typo.b3>
        <Row gap={7}>
          <Row gap={4}>
            <img src="/img/comment.svg" />
            <Typo.s2 color={Palette.Gray4}>{commentCount}</Typo.s2>
          </Row>
          <Row gap={4}>
            <img src="/img/scrap.svg" />
            <Typo.s2 color={Palette.Gray4}>{scrapCount}</Typo.s2>
          </Row>
          <Typo.s2 color={Palette.Gray4}>{date}</Typo.s2>
        </Row>
      </TextContainer>
    </MyPageBoxContainer>
  );
};

import { Palette } from 'styles/Palette';
import Typo from 'styles/Typo';
import {
  Img,
  ImgContainer,
  MyPageBoxContainer,
  Row,
  StyledLink,
  TextContainer,
} from 'assets/common';
import { CategoryLabel } from 'components/Category/CategoryLabel';
import { Ref, forwardRef } from 'react';

interface ScrapBoxInterface {
  children: string;
  title: string;
  date: string;
  postIdx: number;
  category: string;
  commentCount: number;
  scrapCount: number;
}
interface CountSectionInterface {
  icon: string;
  count: number;
}

const ScrapListBox = (
  {
    children,
    title,
    date,
    category,
    postIdx,
    commentCount,
    scrapCount,
  }: ScrapBoxInterface,
  ref: Ref<HTMLDivElement>,
) => {
  const CountSection: CountSectionInterface[] = [
    { icon: 'comment', count: commentCount },
    { icon: 'scrap', count: scrapCount },
  ];
  return (
    <StyledLink to={`/post/${postIdx}`}>
      <MyPageBoxContainer padding="14px 15px" ref={ref}>
        <TextContainer gap={4}>
          <CategoryLabel>{category}</CategoryLabel>
          <Typo.b1>{title}</Typo.b1>
          <Typo.b3 color={Palette.Gray4}>{children}</Typo.b3>
          <Row gap={7}>
            {CountSection.map(
              (section: CountSectionInterface, index: number) => (
                <Row
                  gap={4}
                  style={{ display: 'flex', alignItems: 'center' }}
                  key={index}
                >
                  <ImgContainer width={10} height={10}>
                    <Img src={`/img/${section.icon}.svg`} />
                  </ImgContainer>
                  <Typo.s2 color={Palette.Gray4}>{section.count}</Typo.s2>
                </Row>
              ),
            )}
            <Typo.s2 color={Palette.Gray4}>{date}</Typo.s2>
          </Row>
        </TextContainer>
      </MyPageBoxContainer>
    </StyledLink>
  );
};

export default forwardRef(ScrapListBox);

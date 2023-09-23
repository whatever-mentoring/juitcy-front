import { Column, Row, StyledLink } from 'assets/common';
import { AnsCard, QContentCard, QTitleCard } from 'components/common/Card';
import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { styled } from 'styled-components';
import PageIndicator, { Dot } from '../Main/PageIndicator';
import { postType } from 'types';
import { Ref, forwardRef } from 'react';

const CardSlider = (
  { cards }: { cards: JSX.Element[] },
  ref: Ref<HTMLDivElement>,
) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    afterChange: (current: number) => {
      setCurrentSlide(current);
    },
  };

  return (
    <Wrapper ref={ref}>
      <StyledSlider {...settings}>
        {cards.map((card, index) => card)}
      </StyledSlider>
      <PageIndicator>
        {Array.from({ length: cards.length }, (_, index) => (
          <Dot key={index} selected={index === currentSlide} />
        ))}
      </PageIndicator>
    </Wrapper>
  );
};

export default forwardRef(CardSlider);

export const MakeCardSlider = (posts: postType) => {
  const cardComponents: JSX.Element[] = [];

  cardComponents.push(
    <QTitleCard
      key={'qtitle'}
      category={posts.category}
      content={posts.cardList[0]}
      dateTime={posts.juicyDateTime}
    ></QTitleCard>,
  );
  cardComponents.push(
    <QContentCard key={'qcontent'} content={posts.cardList[1]}></QContentCard>,
  );
  for (let i = 2; i < posts.cardList.length; i++) {
    cardComponents.push(
      <AnsCard key={`ans_${i}`} content={posts.cardList[i]}></AnsCard>,
    );
  }

  return cardComponents;
};

const Wrapper = styled(Column)`
  height: 100%;
  gap: 36px;
`;
const StyledSlider = styled(Slider)`
  .slick-list {
    margin: 0 -5px; //slider 내부 카드 컴포넌트 간 margin
  }
  .slick-slide > div {
    display: flex;
    flex-direction: row;
    justify-content: center;

    padding: 7px 5px; //slider 자체의 padding
  }
`;

import { Column, Row } from 'assets/common';
import { AnsCard, QContentCard, QTitleCard } from 'components/Card';
import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { styled } from 'styled-components';
import { Palette } from 'styles/Palette';
import PageIndicator, { Dot } from './PageIndicator';

const CardSlider = () => {
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
  const cards = [
    <QTitleCard></QTitleCard>,
    <QContentCard></QContentCard>,
    <AnsCard></AnsCard>,
    <AnsCard></AnsCard>,
    <AnsCard></AnsCard>,
  ];

  return (
    <Wrapper>
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

export default CardSlider;

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

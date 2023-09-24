import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Column, StyledLink } from 'assets/common';
import { styled } from 'styled-components';
import { Palette } from 'styles/Palette';
import Typo from 'styles/Typo';
import Slider, { Settings } from 'react-slick';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

interface cardComponentsInterface {
  img: string;
  text: React.ReactNode;
}

const cardComponents: cardComponentsInterface[] = [
  {
    img: 'CardIndex1',
    text: (
      <>
        Juitcy는 익명의 시니어 <span style={{ color: Palette.Blue }}>시니</span>
        와,
        <br />
        익명의 주니어 <span style={{ color: Palette.Orange }}>쥬니</span>를
        연결합니다.
      </>
    ),
  },
  {
    img: 'CardIndex2',
    text: (
      <>
        <span style={{ color: Palette.Orange }}>쥬니</span>는 삶의 고민을 털어
        놓고,
      </>
    ),
  },
  {
    img: 'CardIndex3',
    text: (
      <>
        <span style={{ color: Palette.Blue }}>시니</span>는 삶의 지혜가 담긴
        답변을 남깁니다.
      </>
    ),
  },
];

export const Onboarding = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider>(null);

  // 다음 버튼 클릭 시 슬라이드를 넘김
  const handleNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const settings: Settings = {
    dots: true,
    fade: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index: number) => {
      setCurrentSlide(index);
    },
  };

  return (
    <Container>
      <WithCard>
        <Column gap={15}>
          <Typo.h2>쥬니어와 시니어를 잇다</Typo.h2>
          <div className="img-container">
            <img src="/img/logo-text.svg" />
          </div>
        </Column>
        <div className="slider-container">
          <StyledSlider {...settings} ref={sliderRef}>
            {cardComponents.map(
              (card: cardComponentsInterface, index: number) => (
                <div key={index} style={{ gap: '30px' }}>
                  <Column gap={30}>
                    <div className="card-img-container">
                      <img src={`/img/Onboarding/${card.img}.svg`} />
                    </div>
                    <Typo.b4>{card.text}</Typo.b4>
                  </Column>
                </div>
              ),
            )}
          </StyledSlider>
        </div>
      </WithCard>
      <TextContainer>
        <StyledLink to={currentSlide === 2 ? '/onBoarding.without' : ''}>
          <StyledButton onClick={handleNextSlide}>
            <Typo.h5>다음</Typo.h5>
          </StyledButton>
        </StyledLink>
        <Typo.b3 color={Palette.Gray5}>바로 로그인하기</Typo.b3>
      </TextContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 79px 30px 42px 30px;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .img-container {
    width: 121px;
    margin: 0 0 30px 0;
  }
  .slider-container {
    height: 100%;
  }
`;
const StyledButton = styled.div`
  width: 100%;
  background: ${Palette.Orange};
  color: ${Palette.White};
  padding: 10px 0;
  text-align: center;
  border-radius: 10px;
`;

const StyledSlider = styled(Slider)`
  width: 100%;
  height: fit-contents;

  border-radius: 10px;
  background: ${Palette.White};
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.1);
  padding: 40px 0 30px 0;
  text-align: center;
  margin-bottom: 30px;

  .slick-dots {
    bottom: -40px;
  }

  .card-img-container {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const TextContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px;

  //카드 텍스트
  .emmvmN {
    text-decoration-color: ${Palette.Gray5};
    text-decoration: underline;
  }
`;

const WithCard = styled.div`
  display: block;
`;

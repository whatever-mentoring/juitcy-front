import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Column, EntireContainer, Img, Row, StyledLink } from 'assets/common';
import { styled } from 'styled-components';
import { Palette } from 'styles/Palette';
import Typo from 'styles/Typo';
import Slider, { Settings } from 'react-slick';
import { useRef, useState } from 'react';

const cardComponents: string[] = ['CardIndex1', 'CardIndex2', 'CardIndex3'];

export const Onboarding = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider>(null);

  // 다음 버튼 클릭 시 슬라이드를 넘김
  const handleNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
    if (currentSlide === 2) setCurrentSlide(3);
    else if (currentSlide === 3) setCurrentSlide(4);
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
    <EntireContainer padding={'0'}>
      <Container>
        {/* 카드 슬라이드있는 온보딩 */}
        <WithCard index={currentSlide}>
          <Column gap={15}>
            <Row>
              <Typo.h2 color={Palette.Orange}>쥬니어</Typo.h2>
              <Typo.h2>와 &nbsp;</Typo.h2>
              <Typo.h2 color={Palette.Blue}>시니어</Typo.h2>
              <Typo.h2>를 잇다</Typo.h2>
            </Row>
            <div className="img-container">
              <img src="/img/logo-text-cyni.svg" />
            </div>
          </Column>
          <div className="slider-container">
            <StyledSlider {...settings} ref={sliderRef}>
              {cardComponents.map((img: string, index: number) => (
                <img key={index} src={`/img/Onboarding/${img}.svg`} />
              ))}
            </StyledSlider>
          </div>
        </WithCard>

        {/* 카드슬라이드 없는 온보딩 */}
        <WithoutCard index={currentSlide}>
          {/* 1페이지 */}
          <div className="main1">
            <MainContainer padding={10}>
              <MainImgContainer>
                <Img src="/img/Onboarding/main1.svg" />
              </MainImgContainer>
              <Column gap={20}>
                <Typo.h2>
                  시니의 답변 3개가 모이면,
                  <br />
                  쥬시글에서 그 답변을 확인할 수 있습니다.
                </Typo.h2>
                <Typo.s1 color={Palette.Gray5}>
                  답변 3개가 모이지 않아도 걱정하지 마세요! <br />
                  3일 후에 자동으로 쥬시에 등록됩니다.
                </Typo.s1>
              </Column>
            </MainContainer>
          </div>

          {/* 2페이지 */}
          <div className="main2">
            <MainContainer>
              <div style={{ textAlign: 'center' }}>
                <Typo.h2>
                  존재만으로 서로의 삶에 온기를 더하는 <br />
                  세대 공감 문답 커뮤니티, &nbsp;
                </Typo.h2>
                <StyledText>쥬잇씨</StyledText>
              </div>
              <MainImgContainer margin={50}>
                <Img src="/img/Onboarding/main2.svg" />
              </MainImgContainer>
            </MainContainer>
          </div>
        </WithoutCard>

        {/* 버튼 & 로그인하기 */}
        <TextContainer>
          <StyledLink to={currentSlide === 4 ? '/signup' : ''}>
            <StyledButton onClick={handleNextSlide}>
              <Typo.h5>{currentSlide === 4 ? '시작' : '다음'}</Typo.h5>
            </StyledButton>
          </StyledLink>
          <StyledLink to="/signup">
            <Typo.b3
              color={Palette.Gray5}
              style={{ textDecoration: 'underline' }}
            >
              바로 로그인하기
            </Typo.b3>
          </StyledLink>
        </TextContainer>
      </Container>
    </EntireContainer>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 79px 30px 0px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;

  .img-container {
    width: 121px;
  }
  .slider-container {
    height: 100%;
    padding: 75px 30px 0 30px;
  }
`;
const StyledButton = styled.div`
  width: 100%;
  background: ${Palette.Blue};
  color: ${Palette.White};
  padding: 10px 0;
  text-align: center;
  border-radius: 10px;
`;

const StyledSlider = styled(Slider)`
  width: 100%;
  height: fit-contents;

  .slick-dots {
    bottom: -40px;
  }
`;

const TextContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px;

  //카드 텍스트
  .bevrNG {
    text-decoration-color: ${Palette.Gray5};
    text-decoration: underline;
  }
`;

const WithCard = styled.div<{ index?: number }>`
  display: ${({ index }) => (index === 3 || index === 4 ? 'none' : 'block')};
  height: 510px;
`;
const WithoutCard = styled.div<{ index?: number }>`
  display: ${({ index }) =>
    index === 0 || index === 1 || index === 2 ? 'none' : 'block'};
  height: 510px;
  padding-top: 27px;

  .main1 {
    display: ${({ index }) => (index !== 3 ? 'none' : 'block')};
    text-align: center;
  }
  .main2 {
    display: ${({ index }) => (index !== 4 ? 'none' : 'block')};
  }
`;
const MainImgContainer = styled.div<{ margin?: number }>`
  padding:20px;
  margin: ${({ margin }) => (margin ? margin : 10)}px;
}
`;
const MainContainer = styled.div<{ padding?: number }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ padding }) => (padding ? padding : 50)}px 0 0 0;
`;
const StyledText = styled(Typo.h2)`
  background: linear-gradient(267.62deg, #ff8267 18.22%, #3f6eff 32.35%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

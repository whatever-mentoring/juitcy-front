import { Column, Row, StyledLink } from 'assets/common';
import { CTABtn } from 'components/Button';
import styled from 'styled-components';
import { Palette } from 'styles/Palette';
import Typo from 'styles/Typo';

const CallToAction = () => {
  return (
    <StyledLink to="/question">
      <Container>
        <Column>
          <Row>
            <Typo.h1 color={Palette.Main}>경험 많은</Typo.h1>
            <Typo.h1>&nbsp;시니어 분들에게</Typo.h1>
          </Row>
          <Typo.h1>질문해보세요.✍🏻</Typo.h1>
        </Column>
        <CTABtn>질문하러 가기</CTABtn>
        <Img src="img/smile-face.svg"></Img>
      </Container>
    </StyledLink>
  );
};

export default CallToAction;

const Container = styled(Column)`
  width: 100%;
  height: 222px;

  justify-content: space-between;
  padding: 35px 30px;

  background: ${Palette.Sub.blue};
  position: relative;
`;
const Img = styled.img`
  width: 162px;
  height: 97.41px;

  position: absolute;
  right: 34px;
  bottom: 28px;
`;

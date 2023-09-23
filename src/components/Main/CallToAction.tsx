import { Column, Row, StyledLink } from 'assets/common';
import { CTABtn } from 'components/common/Button';
import closure from 'store/closure';
import styled from 'styled-components';
import { Palette } from 'styles/Palette';
import Typo from 'styles/Typo';

const CallToAction = () => {
  const userType = closure.getUserType();

  return (
    <Container color={userType === 'Juni' ? Palette.Back.juni : Palette.Gray05}>
      <CTAText />
      <CTABtn to="/ask">질문하러 가기</CTABtn>
      <Img src="img/smile-face.svg"></Img>
    </Container>
  );
};

export const CTAText = () => {
  return (
    <Column>
      <Row>
        <Typo.h2 color={Palette.Main}>경험 많은</Typo.h2>
        <Typo.h2>&nbsp;시니어 분들에게</Typo.h2>
      </Row>
      <Typo.h2>질문해보세요.✍🏻</Typo.h2>
    </Column>
  );
};
export default CallToAction;

const Container = styled(Column)<{ color: string }>`
  width: 100%;
  height: 148px;

  justify-content: space-between;
  padding: 18px 30px;

  background: ${({ color }) => color};
  position: relative;
`;
const Img = styled.img`
  width: 116px;
  height: 69.754px;

  position: absolute;
  right: 52px;
  bottom: 24px;
`;

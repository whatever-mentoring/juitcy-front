import { Column, Row } from 'assets/common';
import { CTABtn } from 'components/common/Button';
import styled from 'styled-components';
import { Palette } from 'styles/Palette';
import Typo from 'styles/Typo';

const CallToAction = () => {
  return <></>;
};
export const CallToActionJuni = () => {
  return (
    <Container color={Palette.Back.juni}>
      <CTATextJuni />
      <CTABtn to="/ask">질문하러 가기</CTABtn>
      <JuniImg src="img/smile-face-juni.svg"></JuniImg>
    </Container>
  );
};

export const CallToActionCyni = () => {
  return (
    <Container color={Palette.Gray05}>
      <CTATextCyni />
      <CTABtn to="/answer">답변하러 가기</CTABtn>
      <CyniImg src="img/smile-face-cyni.svg"></CyniImg>
    </Container>
  );
};

export const CTATextJuni = () => {
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
export const CTATextCyni = () => {
  return (
    <Column>
      <Row>
        <Typo.h2>주니어들의&nbsp;</Typo.h2>
        <Typo.h2 color={Palette.Main}>질문에 답변</Typo.h2>
      </Row>
      <Typo.h2>해주세요!📝</Typo.h2>
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
const JuniImg = styled.img`
  width: 116px;
  height: 69.754px;

  position: absolute;
  right: 52px;
  bottom: 24px;
`;
const CyniImg = styled.img`
  width: 187px;
  height: 117px;

  position: absolute;
  right: 5px;
  bottom: 0px;
`;

import styled from 'styled-components';
import { Palette } from 'styles/Palette';
import Typo from 'styles/Typo';
import ctaArrow from 'assets/icons/cta-arrow.svg';

export const LongBtn = ({ children }: { children: string }) => {
  return (
    <Container width={330}>
      <Typo.h5 color={Palette.White}>{children}</Typo.h5>
    </Container>
  );
};

export const ShortBtn = ({ children }: { children: string }) => {
  return (
    <Container>
      <Typo.b4 color={Palette.White}>{children}</Typo.b4>
    </Container>
  );
};

export const CTABtn = ({ children }: { children: string }) => {
  return (
    <CTABtnContainer>
      <Typo.b3 color={Palette.White}>{children}</Typo.b3>
      <img src={ctaArrow}></img>
    </CTABtnContainer>
  );
};

const Container = styled.button<{ width?: number }>`
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 10px;
  background: ${Palette.Main};
  cursor: pointer;
`;
const CTABtnContainer = styled(Container)`
  width: 130px;
  height: 33px;
`;

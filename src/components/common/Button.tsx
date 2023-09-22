import styled from 'styled-components';
import { Palette } from 'styles/Palette';
import Typo from 'styles/Typo';
import ctaArrow from 'assets/icons/cta-arrow.svg';
import { Link } from 'react-router-dom';

interface buttonProps {
  children: string;
  to: string;
}
export const LongBtn = ({ children, to }: buttonProps) => {
  return (
    <Container to={to}>
      <Typo.h5 color={Palette.White}>{children}</Typo.h5>
    </Container>
  );
};

export const ShortBtn = ({ children, to }: buttonProps) => {
  return (
    <Container to={to}>
      <Typo.b4 color={Palette.White}>{children}</Typo.b4>
    </Container>
  );
};

export const CTABtn = ({ children, to }: buttonProps) => {
  return (
    <CTABtnContainer to={to}>
      <Typo.s1 color={Palette.White}>{children}</Typo.s1>
      <img src={ctaArrow}></img>
    </CTABtnContainer>
  );
};

const Container = styled(Link)<{ width?: number }>`
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 10px;
  background: ${Palette.Main};

  text-decoration: none;
  cursor: pointer;
`;
const CTABtnContainer = styled(Container)`
  width: 108px;
  height: 25px;
`;

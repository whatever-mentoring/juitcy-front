import styled from 'styled-components';
import { Palette } from 'styles/Palette';
import Typo from 'styles/Typo';

export const LongBtn = ({ children }: { children: string }) => {
  return (
    <Container width={330}>
      <Typo.h5 color={Palette.White}>{children}</Typo.h5>
    </Container>
  );
};

export const ShortBtn = ({ children }: { children: string }) => {
  return (
    <Container width={279}>
      <Typo.b4 color={Palette.White}>{children}</Typo.b4>
    </Container>
  );
};

const Container = styled.button<{ width: number }>`
  width: ${(width) => width + 'px'};
  height: 50px;

  border: none;
  border-radius: 10px;

  background: ${Palette.Main};
`;

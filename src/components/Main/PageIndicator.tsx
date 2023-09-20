import { Row } from 'assets/common';
import styled from 'styled-components';
import { Palette } from 'styles/Palette';

const PageIndicator = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      {/* 아래 대신 children */}
      {children}

      {/* <Dot selected={true} />
      <Dot selected={false} />
      <Dot selected={false} />
      <Dot selected={false} />
      <Dot selected={false} /> */}
    </Container>
  );
};

export default PageIndicator;

const Container = styled(Row)`
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 11px;
`;
export const Dot = styled.div<{ selected: boolean }>`
  width: 10px;
  height: 10px;

  border-radius: 50%;
  background: ${({ selected }) => (selected ? Palette.Main : Palette.Gray2)};
`;

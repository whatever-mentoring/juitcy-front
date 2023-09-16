import { styled } from 'styled-components';
import { Palette } from 'styles/Palette';
import Typo from 'styles/Typo';

export const NoticeLabel = ({
  children,
  margin,
}: {
  children: string;
  margin?: string;
}) => {
  return (
    <Container margin={margin}>
      <Typo.b3>{children}</Typo.b3>
    </Container>
  );
};

const Container = styled.div<{ margin?: string }>`
  width: 100%;
  padding: 8px 15px;
  background: ${Palette.Sub};
  border-radius: 5px;
  margin: ${({ margin }) => (margin ? margin : '0px')};
`;

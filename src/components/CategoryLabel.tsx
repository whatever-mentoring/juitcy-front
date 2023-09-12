import { styled } from 'styled-components';
import { Palette } from 'styles/Palette';
import Typo from 'styles/Typo';

export const CategoryLabel = ({ children }: { children: React.ReactNode }) => {
  let role = 'juni';
  return (
    <Container role={role}>
      <Typo.s2>{children}</Typo.s2>
    </Container>
  );
};

const Container = styled.div<{ role?: string }>`
  display: flex;
  width: fit-content;
  height: 19px;
  padding: 10px 7px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: ${(props) =>
    props.role == 'juni' ? Palette.Juni.category : Palette.Cyni.category};
`;

import { styled } from 'styled-components';
import { Palette } from 'styles/Palette';
import Typo from 'styles/Typo';
import { CategoryLabel } from './CategoryLabel';

export const MyQnaListBox = () => {
  let ansCount = 3;
  let role = 'juni';

  return (
    <Container>
      <CountStick ansCount={ansCount} role={role} />
      <SubContainer>
        <Row gap={3}>
          <Typo.b3>{role === 'juni' ? 'Q.' : 'A.'}</Typo.b3>
          <Typo.b4>내 질문입니다.</Typo.b4>
        </Row>
        <Row justifyContent="space-between">
          <Row gap={10}>
            <CategoryLabel>일상</CategoryLabel>
            <Typo.b4 color={Palette.Gray4}>2023.09.09</Typo.b4>
          </Row>
          {role === 'juni' ? (
            <Typo.b3 color={Palette.Juni.main}>D-6</Typo.b3>
          ) : (
            <></>
          )}
        </Row>
      </SubContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 72px;
  border-radius: 5px;
  background: ${Palette.White};
  box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.1);
`;
const CountStick = styled.div<{ ansCount?: number; role?: string }>`
  width: 7px;
  height: 100%;
  background: ${({ ansCount, role }) =>
    ansCount == 0
      ? Palette.Gray2
      : ansCount == 1
      ? role == 'juni'
        ? `linear-gradient(to top, ${Palette.Juni.ans1} 33.3%, ${Palette.Gray2} 33.3%)`
        : `linear-gradient(to top, ${Palette.Cyni.ans1} 33.3%, ${Palette.Gray2} 33.3%)`
      : ansCount == 2
      ? role == 'juni'
        ? `linear-gradient(to top, ${Palette.Juni.ans1} 33.3%, ${Palette.Juni.ans1} 33.3%, ${Palette.Juni.ans2} 33.3%, ${Palette.Juni.ans2} 66.6%, ${Palette.Gray2} 66.6%)`
        : `linear-gradient(to top, ${Palette.Cyni.ans1} 33.3%, ${Palette.Cyni.ans1} 33.3%, ${Palette.Cyni.ans2} 33.3%, ${Palette.Cyni.ans2} 66.6%, ${Palette.Gray2} 66.6%)`
      : ansCount == 3
      ? role == 'juni'
        ? Palette.Juni.main
        : Palette.Cyni.main
      : Palette.Black};
  border-radius: 5px 0 0 5px;
`;
const SubContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const Row = styled.div<{ gap?: number; justifyContent?: string }>`
  display: flex;
  gap: ${({ gap }) => (gap ? gap : 0)}px;
  align-items: center;
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : 'initial'};
`;

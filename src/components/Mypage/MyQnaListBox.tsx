import { styled } from 'styled-components';
import { Palette } from 'styles/Palette';
import Typo from 'styles/Typo';
import { CategoryLabel } from './CategoryLabel';
import { MyPageBoxContainer, Row } from 'assets/common';

export const MyQnaListBox = () => {
  let ansCount = 2;
  let userType = 1; // userType 임시변수

  return (
    <MyPageBoxContainer height="72px">
      <CountStick ansCount={ansCount} userType={userType} />
      <SubContainer>
        <Row gap={3}>
          <Typo.b3>{userType === 0 ? 'Q.' : 'A.'}</Typo.b3>
          <Typo.b4>내 질문입니다.</Typo.b4>
        </Row>
        <Row justifyContent="space-between" alignItems="center">
          <Row gap={10} alignItems="center">
            <CategoryLabel>일상</CategoryLabel>
            <Typo.s2 color={Palette.Gray4}>2023.09.09</Typo.s2>
          </Row>
          <Typo.s1 color={Palette.Main}>D-6</Typo.s1>
        </Row>
      </SubContainer>
    </MyPageBoxContainer>
  );
};

const CountStick = styled.div<{ ansCount?: number; userType?: number }>`
  width: 7px;
  height: 100%;
  background: ${({ ansCount, userType }) =>
    ansCount == 0
      ? Palette.Gray2
      : ansCount == 1
      ? `linear-gradient(to top, ${Palette.Main50} 33.3%, ${Palette.Gray2} 33.3%)`
      : ansCount == 2
      ? `linear-gradient(to top, ${Palette.Main50} 33.3%, ${Palette.Main50} 33.3%, ${Palette.Main80} 33.3%, ${Palette.Main80} 66.6%, ${Palette.Gray2} 66.6%)`
      : ansCount == 3
      ? Palette.Main
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

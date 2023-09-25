import { styled } from 'styled-components';
import { Palette } from 'styles/Palette';
import Typo from 'styles/Typo';
import { MyPageBoxContainer, Row, StyledLink } from 'assets/common';
import { CategoryLabel } from 'components/Category/CategoryLabel';
import { Ref, forwardRef } from 'react';

interface qnaBoxInterface {
  children?: string;
  count: number;
  dDay: number;
  category: string;
  date: string;
  postIdx: number;
}

const MyQnaListBox = (
  { children, count, dDay, category, date, postIdx }: qnaBoxInterface,
  ref: Ref<HTMLDivElement>,
) => {
  const userType = window.localStorage.getItem('userType');

  return (
    <StyledLink
      to={count !== 3 ? '' : `/post/${postIdx}`}
      onClick={() => count !== 3 && alert('아직 답변이 모자라요!')}
    >
      <MyPageBoxContainer height="72px" ref={ref}>
        <CountStick ansCount={count} />
        <SubContainer>
          <Row gap={3}>
            <Typo.b3>{userType === 'Juni' ? 'Q.' : 'A.'}</Typo.b3>
            <Typo.b4>{children}</Typo.b4>
          </Row>
          <Row justifyContent="space-between" alignItems="center">
            <Row gap={10} alignItems="center">
              <CategoryLabel>{category}</CategoryLabel>
              {count === 3 && <Typo.s2 color={Palette.Gray4}>{date}</Typo.s2>}
            </Row>
            {count !== 3 && <Typo.s1 color={Palette.Main}>D-{dDay}</Typo.s1>}
          </Row>
        </SubContainer>
      </MyPageBoxContainer>
    </StyledLink>
  );
};

export default forwardRef(MyQnaListBox);

const CountStick = styled.div<{ ansCount?: number }>`
  width: 7px;
  height: 100%;
  background: ${({ ansCount }) =>
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

import { Row } from 'assets/common';
import { styled } from 'styled-components';
import { Palette } from 'styles/Palette';
import Typo from 'styles/Typo';

interface submenuBoxInterface {
  children: React.ReactNode;
  count?: number;
  icon: string;
  borderRadius?: string;
}

export const SubMenuBox = ({
  children,
  count,
  icon,
  borderRadius,
}: submenuBoxInterface) => {
  return (
    <Container borderRadius={borderRadius}>
      <Row
        alignItems="center"
        justifyContent="space-between"
        style={{ width: '100%' }}
      >
        <Row gap={19}>
          <img
            src={process.env.PUBLIC_URL + `/img/MypageSubmenuIcons/${icon}.svg`}
          ></img>
          <Typo.b1>{children}</Typo.b1>
        </Row>
        <Row gap={8}>
          {count !== -1 ? (
            <Row gap={3}>
              <Typo.b2 color={Palette.Main}>{count}</Typo.b2>
              <Typo.b2 color={Palette.Gray4}>개</Typo.b2>
            </Row>
          ) : (
            <></>
          )}

          <img src="/img/arrow.svg" />
        </Row>
      </Row>
    </Container>
  );
};

export const Container = styled.div<{ borderRadius?: string }>`
  display: flex;
  width: 100%;
  height: 75px;
  border-radius: 10px;
  padding: 25px 15px;
  background: ${Palette.White};
`;

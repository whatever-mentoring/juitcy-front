import { MyPageBoxContainer, Row } from 'assets/common';
import { Palette } from 'styles/Palette';
import Typo from 'styles/Typo';

export const SubMenuBox = ({
  children,
  count,
  icon,
}: {
  children: React.ReactNode;
  count?: number;
  icon: string;
}) => {
  return (
    <MyPageBoxContainer borderRadius={10} height="75px" padding="25px 15px">
      <Row
        alignItems="center"
        justifyContent="space-between"
        style={{ width: '100%' }}
      >
        <Row gap={19}>
          <img src={`/img/MypageSubmenuIcons/${icon}.svg`}></img>
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
    </MyPageBoxContainer>
  );
};

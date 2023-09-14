import { MyPageBoxContainer, Row } from 'assets/common';
import { Palette } from 'styles/Palette';
import Typo from 'styles/Typo';

export const SubMenuBox = () => {
  return (
    <MyPageBoxContainer borderRadius={10} height="75px" padding="25px 15px">
      <Row
        alignItems="center"
        justifyContent="space-between"
        style={{ width: '100%' }}
      >
        <Row gap={19}>
          <img src="/img/newsletter.svg"></img>
          <Typo.b1>뉴스레터 구독</Typo.b1>
        </Row>
        <Row gap={8}>
          <Row gap={3}>
            <Typo.b2 color={Palette.Main}>5</Typo.b2>
            <Typo.b2 color={Palette.Gray4}>개</Typo.b2>
          </Row>
          <img src="/img/arrow.svg" />
        </Row>
      </Row>
    </MyPageBoxContainer>
  );
};

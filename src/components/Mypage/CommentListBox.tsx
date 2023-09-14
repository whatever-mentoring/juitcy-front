import { MyPageBoxContainer, Row, TextContainer } from 'assets/common';
import { Palette } from 'styles/Palette';
import Typo from 'styles/Typo';

export const CommentListBox = () => {
  let userType = 1;
  let icon = 'juni_commentSubIcon';
  if (userType == 0) icon = 'juni_commentSubIcon';
  else if (userType == 1) icon = 'cyni_commentSubIcon';

  return (
    <MyPageBoxContainer padding="14px" height="79px">
      <TextContainer>
        <Typo.b4>댓글입니다댓글입니다.댓글입니다댓글입니다.</Typo.b4>
        <Row gap={5}>
          <img src={`img/${icon}.svg`} />
          <Typo.b4 color={Palette.Gray4}>글 제목</Typo.b4>
        </Row>
        <Typo.s2 color={Palette.Gray4}>2023.09.09</Typo.s2>
      </TextContainer>
    </MyPageBoxContainer>
  );
};

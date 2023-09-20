import { MyPageBoxContainer, Row, TextContainer } from 'assets/common';
import closure from 'store/closure';
import { Palette } from 'styles/Palette';
import Typo from 'styles/Typo';

interface commentBoxInterface {
  children: string;
  title: string;
  date: string;
}

export const CommentListBox = ({
  children,
  title,
  date,
}: commentBoxInterface) => {
  const userType = closure.getUserType();

  let icon = 'juni_commentSubIcon';
  if (userType === 'Juni') icon = 'juni_commentSubIcon';
  else icon = 'cyni_commentSubIcon';

  return (
    <MyPageBoxContainer padding="14px" height="79px">
      <TextContainer>
        <Typo.b4>{children}</Typo.b4>
        <Row gap={5}>
          <img src={`/img/${icon}.svg`} />
          <Typo.b4 color={Palette.Gray4}>{title}</Typo.b4>
        </Row>
        <Typo.s2 color={Palette.Gray4}>{date}</Typo.s2>
      </TextContainer>
    </MyPageBoxContainer>
  );
};

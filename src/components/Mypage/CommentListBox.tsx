import {
  MyPageBoxContainer,
  Row,
  StyledLink,
  TextContainer,
} from 'assets/common';
import { Ref, forwardRef } from 'react';
import { Palette } from 'styles/Palette';
import Typo from 'styles/Typo';

interface commentBoxInterface {
  children: string;
  title: string;
  date: string;
  postIdx: number;
}

const CommentListBox = (
  { children, title, date, postIdx }: commentBoxInterface,
  ref: Ref<HTMLDivElement>,
) => {
  const userType = window.localStorage.getItem('userType');

  let icon = 'juni_commentSubIcon';
  if (userType === 'Juni') icon = 'juni_commentSubIcon';
  else icon = 'cyni_commentSubIcon';

  return (
    <StyledLink to={`/post/${postIdx}`}>
      <MyPageBoxContainer padding="14px" height="79px" ref={ref}>
        <TextContainer>
          <Typo.b4>{children}</Typo.b4>
          <Row gap={5}>
            <img src={process.env.PUBLIC_URL + `/img/${icon}.svg`} />
            <Typo.b4 color={Palette.Gray4}>{title}</Typo.b4>
          </Row>
          <Typo.s2 color={Palette.Gray4}>{date}</Typo.s2>
        </TextContainer>
      </MyPageBoxContainer>
    </StyledLink>
  );
};

export default forwardRef(CommentListBox);

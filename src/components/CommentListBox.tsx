import styled from 'styled-components';
import { Palette } from 'styles/Palette';
import Typo from 'styles/Typo';

export const CommentListBox = () => {
  let role = 'juni';
  let icon = 'juni_commentSubIcon';
  if (role == 'juni') icon = 'juni_commentSubIcon';
  else if (role == 'cyni') icon = 'cyni_commentSubIcon';

  return (
    <Contanier>
      <TextContainer>
        <Typo.b4>댓글입니다댓글입니다.댓글입니다댓글입니다.</Typo.b4>
        <Row>
          <img src={`img/${icon}.svg`} />
          <Typo.b4 color={Palette.Gray4}>글 제목</Typo.b4>
        </Row>
        <Typo.s2 color={Palette.Gray4}>2023.09.09</Typo.s2>
      </TextContainer>
    </Contanier>
  );
};

const Contanier = styled.div`
  width: 100%;
  height: 79px;
  padding: 14px;
  border-radius: 5px;
  background: #fff;
  box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.1);
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Row = styled.div`
  display: flex;
  gap: 5px;
`;

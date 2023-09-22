import { Row } from 'assets/common';
import { useNavigate } from 'react-router-dom';
import closure from 'store/closure';
import styled from 'styled-components';
import { Palette } from 'styles/Palette';
import Typo from 'styles/Typo';
import { useLocation } from 'react-router-dom';

const WriteConfirmBar = () => {
  const userType = closure.getUserType();
  const navigate = useNavigate();
  const location = useLocation();
  const currentURI = location.pathname;

  const onClickWrite = () => {
    let message, destination;

    if (currentURI === '/ask/write') {
      message = '질문을 등록하겠습니까?';
      destination = '/ask';
    } else {
      message = '답변을 등록하겠습니까?';
      destination = '/answer';
    }

    const result = window.confirm(message);
    if (result) {
      navigate(destination);
    }
  };
  const onClickCancel = () => {
    const message = '작성을 취소하시겠습니까?';
    const destination = currentURI === '/ask/write' ? '/ask' : '/answer';

    const result = window.confirm(message);
    if (result) {
      navigate(destination);
    }
  };

  return (
    <Container>
      <BtnDib
        color={Palette.Gray05}
        borderClr={Palette.Gray2}
        onClick={onClickCancel}
      >
        <Typo.h2 color={Palette.Gray4}>취소</Typo.h2>
      </BtnDib>
      <BtnDib
        color={Palette.Main}
        borderClr={Palette.Main}
        onClick={onClickWrite}
      >
        <Typo.h2 color={Palette.White}>작성완료</Typo.h2>
      </BtnDib>
    </Container>
  );
};

export default WriteConfirmBar;

const Container = styled(Row)`
  width: 100%;
  height: 59px;
`;
const BtnDib = styled(Row)<{ color: string; borderClr: string }>`
  width: 50%;
  justify-content: center;
  align-items: center;

  background: ${({ color }) => color};
  border-top: 1px solid ${({ borderClr }) => borderClr};
  cursor: pointer;
`;

import { Row } from 'assets/common';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Palette } from 'styles/Palette';
import Typo from 'styles/Typo';

const WriteConfirmBar = ({ userType }: { userType: number }) => {
  const navigate = useNavigate();
  const onClickWrite = () => {
    const result = window.confirm('답변을 등록하겠습니까?');
    if (result) {
      alert('답변이 등록되었습니다.');
    } else {
    }
  };
  const onClickCancle = () => {
    const result = window.confirm('작성을 취소하시겠습니까?');
    if (result) {
      userType === 1 ? navigate('/answer') : navigate('/question');
    } else {
    }
  };

  return (
    <Container>
      <BtnDib color={Palette.White} onClick={onClickCancle}>
        <Typo.h2 color={Palette.Gray4}>취소</Typo.h2>
      </BtnDib>
      <BtnDib color={Palette.Main} onClick={onClickWrite}>
        <Typo.h2 color={Palette.White}>작성완료</Typo.h2>
      </BtnDib>
    </Container>
  );
};

export default WriteConfirmBar;

const Container = styled(Row)`
  width: 100%;
  height: 59px;

  box-shadow: 0px -1px 6px 0px rgba(0, 0, 0, 0.1);
`;
const BtnDib = styled(Row)<{ color: string }>`
  width: 50%;
  justify-content: center;
  align-items: center;

  background: ${({ color }) => color};
  cursor: pointer;
`;

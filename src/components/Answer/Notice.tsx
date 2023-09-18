import { Column } from 'assets/common';
import styled from 'styled-components';
import Typo from 'styles/Typo';

const Notice = () => {
  return (
    <Container>
      <Typo.h1>📝 질문에 답해주세요!</Typo.h1>
      <Typo.b3>주니어들이 시니어님의 답변을 기다리고 있어요:)</Typo.b3>
    </Container>
  );
};

export default Notice;

const Container = styled(Column)`
  padding: 30px;
  padding-bottom: 10px;
  gap: 5px;
`;

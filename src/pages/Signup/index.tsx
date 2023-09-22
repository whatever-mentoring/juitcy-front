import { Column, EntireContainer, Row } from 'assets/common';
import Typo from 'styles/Typo';
import styled from 'styled-components';
import { SignupBtn } from 'components/common/Button';

const Signup = () => {
  const NAVER_CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID;
  const NAVER_REDIRECT_URI = process.env.REACT_APP_NAVER_REDIRECT_URI;
  const STATE_STRING = 'test';
  const authURI = `https://nid.naver.com/oauth2.0/authorize?client_id=${NAVER_CLIENT_ID}&redirect_uri=${NAVER_REDIRECT_URI}&response_type=code&state=${STATE_STRING}`;

  return (
    <EntireContainer>
      <InnerContainer justifyContent="space-between">
        <Column gap={11} alignItems="flex-start">
          <Typo.h2>주니어와 시니어를 잇다</Typo.h2>
          <LogoText src="/img/logo-text.svg"></LogoText>
        </Column>
        <InnerContents></InnerContents>

        <Row justifyContent="center">
          <SignupBtn to={authURI}>네이버로 시작하기</SignupBtn>
        </Row>
      </InnerContainer>
    </EntireContainer>
  );
};

export default Signup;

const LogoText = styled.img`
  height: 38px;
`;
const InnerContainer = styled(Column)`
  width: 100%;
  height: 100%;
  justify-content: space-between;
`;
const InnerContents = styled(Column)`
  width: 100%;
  height: 100%;
`;

import { Column, EntireContainer } from 'assets/common';
import { LongBtn } from 'components/common/Button';
import styled from 'styled-components';
import { Palette } from 'styles/Palette';
import Typo from 'styles/Typo';

const SignupSuccess = () => {
  const userType = window.localStorage.getItem('userType');

  return (
    <EntireContainer>
      <InnerContainer>
        <Column gap={11}>
          <Typo.h1>회원가입 완료</Typo.h1>
          <Typo.h2 color={Palette.Gray4}>
            쥬잇씨 가입이 완료되었습니다. <br />
            만나서 반가워요!
          </Typo.h2>
        </Column>
        <Img>
          {userType === 'Juni' ? (
            <img src="/img/pageImgs/signup-success-juni.svg" />
          ) : (
            <img src="/img/pageImgs/signup-success-cyni.svg" />
          )}
        </Img>

        <LongBtn to="/">확인</LongBtn>
      </InnerContainer>
    </EntireContainer>
  );
};

export default SignupSuccess;

const InnerContainer = styled(Column)`
  width: 100%;
  height: 100%;
  justify-content: space-between;

  padding-top: 60px;
`;
const Img = styled(Column)`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

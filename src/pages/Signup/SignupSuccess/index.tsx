import { Column, EntireContainer } from 'assets/common';
import { LongBtn } from 'components/common/Button';
import { Header } from 'components/common/Header';
import styled from 'styled-components';
import { Palette } from 'styles/Palette';
import Typo from 'styles/Typo';

const SignupSuccess = () => {
  const userType = window.localStorage.getItem('userType');

  return (
    <Column>
      <Header borderBottom={false}>{''}</Header>
      <EntireContainer>
        <InnerContainer>
          <Column gap={11}>
            <Typo.h1>회원가입 완료</Typo.h1>
            <Typo.h2 color={Palette.Gray4}>
              쥬잇씨 가입이 완료되었습니다. <br />
            </Typo.h2>
            <Typo.h2 color={Palette.Gray4}>
              {userType === 'Juni'
                ? '지금 바로 질문을 등록해보세요!'
                : '주니어들의 고민을 확인하러 가볼까요?'}
            </Typo.h2>
          </Column>
          <ImgWrapper>
            {userType === 'Juni' ? (
              <Img src="/img/pageImgs/signup-success-juni.svg" />
            ) : (
              <Img src="/img/pageImgs/signup-success-cyni.svg" />
            )}
          </ImgWrapper>
          <LongBtn to="/">확인</LongBtn>
        </InnerContainer>
      </EntireContainer>
    </Column>
  );
};

export default SignupSuccess;

const InnerContainer = styled(Column)`
  width: 100%;
  height: 100%;
  justify-content: space-between;
`;
const ImgWrapper = styled(Column)`
  width: 100%;
  height: 320px;
  justify-content: center;
  align-items: center;
`;
const Img = styled.img`
  width: 250px;
`;

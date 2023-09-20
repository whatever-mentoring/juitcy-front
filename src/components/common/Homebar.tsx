import styled from 'styled-components';
import answerOff from '@assets/icons/answer-off.svg';
import answerOn from '@assets/icons/answer-on.svg';
import askOff from '@assets/icons/ask-off.svg';
import askOn from '@assets/icons/ask-on.svg';
import juicygeulOff from '@assets/icons/juicygeul-off.svg';
import juicygeulOnJuni from '@assets/icons/juicygeul-on-juni.svg';
import juicygeulOnCyni from '@assets/icons/juicygeul-on-cyni.svg';
import mypageOff from '@assets/icons/mypage-off.svg';
import mypageOnJuni from '@assets/icons/mypage-on-juni.svg';
import mypageOnCyni from '@assets/icons/mypage-on-cyni.svg';
import Typo from 'styles/Typo';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import closure from 'store/closure';

const Homebar = () => {
  const { pathname } = useLocation();
  const userType = closure.getUserType();

  const [icons, setIcons] = useState({
    isAnsOn: false,
    isAskOn: false,
    isJuicyOn: false,
    isMpgOn: false,
  });

  return (
    <Container>
      {userType === 'Cyni' ? (
        <Menu to="/answer">
          <Icon src={`${pathname === '/answer' ? answerOn : answerOff}`} />
          <Typo.homebar isOn={icons.isAnsOn}>답변하기</Typo.homebar>
        </Menu>
      ) : (
        <Menu to="/answer">
          <Icon src={`${pathname === '/answer' ? askOn : askOff}`} />
          <Typo.homebar isOn={icons.isAskOn}>질문하기</Typo.homebar>
        </Menu>
      )}

      <Menu to="/">
        <Icon
          src={`${
            pathname === '/'
              ? userType === 'Cyni'
                ? juicygeulOnCyni
                : juicygeulOnJuni
              : juicygeulOff
          }`}
        />
        <Typo.homebar isOn={icons.isJuicyOn}>주씨글</Typo.homebar>
      </Menu>

      <Menu to="/myPage">
        <Icon
          src={`${
            pathname === '/myPage'
              ? userType === 'Cyni'
                ? mypageOnCyni
                : mypageOnJuni
              : mypageOff
          }`}
        />
        <Typo.homebar isOn={icons.isMpgOn}>마이페이지</Typo.homebar>
      </Menu>
    </Container>
  );
};

export default Homebar;

const Container = styled.div`
  width: 100%;
  height: 96px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 0px 52px;
  box-shadow: 0px -1px 6px 0px rgba(0, 0, 0, 0.1);
`;
const Menu = styled(Link)`
  height: 55px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 3px;

  text-decoration: none;
  cursor: pointer;
`;
const Icon = styled.img``;

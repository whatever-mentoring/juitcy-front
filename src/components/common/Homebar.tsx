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
import { Link } from 'react-router-dom';

const Homebar = () => {
  let userType = 2; //임시 변수
  const [icons, setIcons] = useState({
    isAnsOn: false,
    isAskOn: false,
    isJuicyOn: false,
    isMpgOn: false,
  });

  const handleClick = (iconName: string) => {
    setIcons((prevState) => ({
      ...prevState,
      isAnsOn: iconName === 'ans',
      isAskOn: iconName === 'ask',
      isJuicyOn: iconName === 'juicy',
      isMpgOn: iconName === 'mpg',
    }));
  };

  return (
    <Container>
      {userType == 1 ? (
        <Menu to="/answer" onClick={() => handleClick('ans')}>
          <Icon src={`${icons.isAnsOn ? answerOn : answerOff}`} />
          <Typo.homebar isOn={icons.isAnsOn}>답변하기</Typo.homebar>
        </Menu>
      ) : (
        <Menu to="/ask" onClick={() => handleClick('ask')}>
          <Icon src={`${icons.isAskOn ? askOn : askOff}`} />
          <Typo.homebar isOn={icons.isAskOn}>질문하기</Typo.homebar>
        </Menu>
      )}

      <Menu to="/" onClick={() => handleClick('juicy')}>
        <Icon
          src={`${
            icons.isJuicyOn
              ? userType === 1
                ? juicygeulOnCyni
                : juicygeulOnJuni
              : juicygeulOff
          }`}
        />
        <Typo.homebar isOn={icons.isJuicyOn}>주씨글</Typo.homebar>
      </Menu>

      <Menu to="/myPage" onClick={() => handleClick('mpg')}>
        <Icon
          src={`${
            icons.isMpgOn
              ? userType === 1
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

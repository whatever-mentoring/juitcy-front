import { Column, EntireContainer, Row } from 'assets/common';
import { myPageMemu } from 'assets/data/MypageData';
import { Header } from 'components/common/Header';
import Homebar from 'components/common/Homebar';
import { SubMenuBox } from 'components/Mypage/SubMenuBox';
import { myPageApi } from 'network/apis/myPageApi';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { Palette } from 'styles/Palette';
import Typo from 'styles/Typo';

export interface mypageMenuInterface {
  link: string;
  icon: string;
  menu: string;
  margin: number;
  count: string;
}
export interface userMypageData {
  name: string;
  questionCount?: number;
  commentCount: number;
  scrapCount: number;
  answerCount?: number;
}

export const Mypage = () => {
  const userType = window.localStorage.getItem('userType');
  let icon = 'juniIcon';
  const [userMypageData, setUserMypageData] = useState<userMypageData>();

  userType === 'Juni' ? (icon = 'juniIcon') : (icon = 'cyniIcon');

  useEffect(() => {
    myPageApi
      .GET_MYPAGE_DATA()
      .then((res) => setUserMypageData(res?.data?.result));
  }, []);

  const Logout = () => {
    window.localStorage.removeItem('access_token');
    window.localStorage.removeItem('refresh_token');
    window.localStorage.removeItem('userType');
    window.location.href = '/signup';
  };

  return (
    <>
      <Header
        borderBottom={false}
        color={`${Palette.Main}`}
        background={`${Palette.Gray05}`}
      >
        MY
      </Header>
      <EntireContainer homebar={true} background={`${Palette.Gray05}`}>
        <Row justifyContent="space-between" alignItems="center">
          <Column>
            <Typo.h4>안녕하세요</Typo.h4>
            <UnderLine>
              <Typo.h2>{userMypageData?.name}</Typo.h2>
              <Typo.h4> &nbsp; 님</Typo.h4>
            </UnderLine>
          </Column>
          <img src={`/img/${icon}.svg`} />
        </Row>
        <div className="mypage-submenu-container">
          <div className="mypage-submenu-subcontainer">
            {myPageMemu
              .slice(0, 3)
              .map((menu: mypageMenuInterface, index: number) => (
                <StyledLink to={menu.link} key={index} margin={menu.margin}>
                  <SubMenuBox
                    count={
                      menu.count === 'questionCount'
                        ? userType === 'Juni'
                          ? userMypageData?.questionCount
                          : userMypageData?.answerCount
                        : menu.count === 'commentCount'
                        ? userMypageData?.commentCount
                        : menu.count === 'scrapCount'
                        ? userMypageData?.scrapCount
                        : 0
                    }
                    icon={menu.icon}
                  >
                    {menu.menu}
                  </SubMenuBox>
                </StyledLink>
              ))}
          </div>
          {myPageMemu
            .slice(3, 5)
            .map((menu: mypageMenuInterface, index: number) => (
              <StyledLink
                to={menu.link}
                key={index}
                margin={menu.margin}
                onClick={() => (index === 4 ? Logout() : null)}
              >
                <SubMenuBox count={-1} icon={menu.icon}>
                  {menu.menu}
                </SubMenuBox>
              </StyledLink>
            ))}
        </div>

        <Column gap={15}>
          <Row alignItems="center" gap={10}>
            <StyledLink to="/myPage/provision" state={{ page: '이용약관' }}>
              <Typo.b3 color={Palette.Gray4}>이용약관</Typo.b3>
            </StyledLink>
            <Circle />
            <StyledLink
              to="/myPage/provision"
              state={{ page: '개인정보처리방침' }}
            >
              <Typo.b3 color={Palette.Gray4}>개인정보처리방침</Typo.b3>
            </StyledLink>
          </Row>
          <StyledLink to="">
            <Typo.b3 color={Palette.Gray4}>
              Copyright ⓒ Juitcy All rights reserved.
            </Typo.b3>
          </StyledLink>
        </Column>
      </EntireContainer>
      <Homebar />
    </>
  );
};

const StyledLink = styled(Link)<{ margin?: number }>`
  text-decoration: none;
  color: ${Palette.Black};
  margin: ${({ margin }) => (margin ? `0px ${margin}px` : '0px')};
`;
const UnderLine = styled.div`
  display: flex;
  width: fit-content;
  background: linear-gradient(
    to top,
    ${Palette.Main15} 33.3%,
    ${Palette.Gray05} 33.3%
  );
`;
const Circle = styled.div`
  width: 2px;
  height: 2px;
  border-radius: 50%;
  background: ${Palette.Gray4};
`;

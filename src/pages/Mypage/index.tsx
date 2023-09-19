import { Column, EntireContainer, Row } from 'assets/common';
import { myPageMemu } from 'assets/data/MypageData';
import { Header } from 'components/common/Header';
import Homebar from 'components/common/Homebar';
import { SubMenuBox } from 'components/Mypage/SubMenuBox';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { Palette } from 'styles/Palette';
import Typo from 'styles/Typo';

export interface mypageMenuInterface {
  link: string;
  icon: string;
  menu: string;
  margin: number;
}

export const Mypage = () => {
  let userType = 0;
  let icon = 'juniIcon';

  userType === 0 ? (icon = 'juniIcon') : (icon = 'cyniIcon');

  return (
    <>
      <Header
        borderBottom={false}
        color={`${Palette.Main}`}
        background={`${Palette.Gray05}`}
      >
        MY
      </Header>
      <EntireContainer homebar={true}>
        <Row justifyContent="space-between" alignItems="center">
          <Column>
            <Typo.h4>안녕하세요</Typo.h4>
            <UnderLine>
              <Typo.h2>김쥬니</Typo.h2>
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
                  <SubMenuBox count={5} icon={menu.icon}>
                    {menu.menu}
                  </SubMenuBox>
                </StyledLink>
              ))}
          </div>
          {myPageMemu
            .slice(3, 5)
            .map((menu: mypageMenuInterface, index: number) => (
              <StyledLink to={menu.link} key={index} margin={menu.margin}>
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

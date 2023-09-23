import { Column } from 'assets/common';
import { Header } from 'components/common/Header';
import { useLocation } from 'react-router-dom';
import { styled } from 'styled-components';
import { Palette } from 'styles/Palette';
import Typo from 'styles/Typo';

export const Provision = () => {
  const location = useLocation();
  const page = location.state.page;

  return (
    <>
      <Header borderBottom={false} btn="back">
        {page === '이용약관' ? '이용약관' : '개인정보 처리방침'}
      </Header>
      <Container padding="10px 0 0 0">
        <Container background={`${Palette.White}`} padding="30px">
          <Typo.h1>
            {page === '이용약관'
              ? '쥬잇씨 이용약관'
              : '이용자 개인정보 처리방침'}
          </Typo.h1>
          <Line />
          <Column gap={20}>
            <Typo.h2>제 1장 총칙</Typo.h2>
            <Typo.b1>제 1 조 [목적] </Typo.b1>
            <Typo.s2>
              본 이용약관은 주식회사 카카오스타일 (이하 "회사"라 합니다)이
              운영하는 Website 또는 Application 등 온라인 쇼핑 플랫폼 서비스와
              관련하여, 회사와 서비스를 이용하는 자(이하 “이용자”라 합니다)
              사이의 권리, 의무, 기타 필요한 사항을 정함으로써 상호 이익을
              도모하는 것을 그 목적으로 합니다. 제 2 조 [용어의 정의] ① 이
              약관에서 사용하는 용어의 정의는 다음과 같습니다. 1. “쇼핑 플랫폼”
              또는 “서비스”라 함은 회사가 이용자들로 하여금 편리하게 쇼핑을 즐길
              수 있도록 제공하는 앱 또는 웹 형태의 이커머스 플랫폼으로서, 다음
              각 호의 서비스를 의미합니다. 가. 국내 : 지그재그(Zigzag),
              포스티(Posty), 패션바이카카오(Fashion by kakao),
              직잭메이트(Zigzagmate), 마이스토어(Mystore) 나. 글로벌(해외) :
              지그재그(Zigzag), 직잭메이트(Zigzagmate) 2. “이용자”라 함은 쇼핑은
              쇼핑 플랫폼을 이용하는 만 14세 이상의 일반 소비자를 말하며, 회원과
              비회원을 모두 포함합니다. 3. “회원”이라 함은 회사에 개인정보를
              제공하고, 본 이용약관에 동의하여 회원 등록절차를 마친 이용자를
              말합니다. 4. “비회원”이라 함은 회원이 아닌 이용자를 말합니다. 5.
              “아이디(ID)”라 함은 회원의 식별과 서비스 이용을 위하여 회원이
              설정하고 회사가 승인하여 등록된 전자우편주소를 의미합니다. 6.
              “비밀번호”라 함은 회원의 동일성 확인과 회원의 권익 보호를 위하여
              회원 스스로 설정한 문자와 숫자의 조합을 의미합니다. 7. “제휴사”라
              함은 웹사이트 또는 모바일 앱을 통해 쇼핑몰을 운영하는 자로서,
              회사의 쇼핑 플랫폼을 통하여 상품 등의 정보를 노출하고 상품을
              판매하는 사업자를 의미합니다. 8. “상품정보”라 함은 제휴사가 자신이
              판매하는 상품의 이미지, 상품명, 가격정보, 링크정보 등의 정보를
              의미합니다. 9. “결제 서비스"라 함은 제휴사가 운영하는
              웹사이트(이하 '쇼핑몰')에서 회원이 쇼핑 플랫폼 계정을 이용하여
              상품을 구입하는 경우, 이를 용이하게 할 수 있도록 회사가 각
              제공하는 통합 결제서비스를 의미합니다. 10. "포인트"라 함은 회원이
              쇼핑 플랫폼 이용 시 회사가 제공하는 혜택으로, 제공 기준 및
              사용방법 등에 대하여는 회사가 별도로 정하는 정책에 따릅니다. ②
              제1항에서 정의되지 않은 본 이용약관 상의 용어의 의미는 일반적인
              거래관행에 의합니다.
            </Typo.s2>
          </Column>
        </Container>
      </Container>
    </>
  );
};

const Container = styled.div<{ padding?: string; background?: string }>`
  width: 100%;
  background: ${({ background }) => (background ? background : Palette.Gray05)};
  padding: ${({ padding }) => (padding ? padding : 0)};
`;
const Line = styled.div`
  width: 100%;
  height: 1.5px;
  background: ${Palette.Gray4};
  margin: 9px 0 15px 0;
`;

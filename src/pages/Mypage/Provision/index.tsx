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
            <Typo.b1>제 1 조 (목적) </Typo.b1>
            <Typo.s2>
              쥬잇씨 서비스 이용약관은 Ewhatever(이하 “회사”라 합니다)가
              제공하는 쥬잇씨 서비스의 이용과 관련하여 회사와 이용자 간의 권리,
              의무 및 책임 사항 등을 규정함을 목적으로 합니다.
              <br />
              <br />
              <Typo.b1>제 2 조 (정의) </Typo.b1> <br />
              <br />① 이 약관에서 사용하는 용어의 정의는 다음과 같습니다.
              <br />
              &nbsp; &nbsp; 1. "서비스”란, 회사가 제공하는 모든 서비스 및 기능을
              말합니다
              <br /> &nbsp;&nbsp;2. "이용자”란, 이 약관에 따라 서비스를 이용하는
              회원을 말합니다. <br /> &nbsp; &nbsp;3. “회원”이란, 서비스에
              회원등록을 하고 서비스를 이용하는 자를 말합니다.
              <br /> &nbsp; &nbsp;4. “게시물”이란, 서비스에 게재된 문자, 사진,
              광고 등을 말합니다 &nbsp; &nbsp;5. “커뮤니티”란, 게시물을 게시할
              수 있는 공간을 말합니다. <br />
              &nbsp; &nbsp; 6. “이용 기록”이란, 이용자가 서비스를 이용하면서
              직접 생성한 질문, 답변, 댓글 등을 말합니다.
              <br /> &nbsp; &nbsp; 7. “로그 기록”이란, 이용자가 서비스를
              이용하면서 자동으로 생성된 IP 주소, 접속 시간 등을 말합니다.
              <br /> &nbsp; &nbsp; 8. “기기 정보”란, 이용자의 통신 기기에서
              수집된 유저 에이전트, ADID 등을 말합니다.
              <br /> &nbsp; &nbsp; 9. “계정”이란, 이용계약을 통해 생성된 회원의
              고유 아이디와 이에 수반하는 정보를 말합니다.
              <br /> &nbsp; &nbsp; 10. "연락처”란, 회원가입을 통해 수집된
              이용자의 이메일, 휴대전화 번호 등을 의미합니다. <br /> &nbsp;
              &nbsp; 11. "관련법”이란, 정보통신망 이용촉진 및 정보보호 등에 관한
              법률, 전기통신사업법, 개인정보보호법 등 관련 있는 국내 법령을
              말합니다. <br /> ② 제1항에서 정의되지 않은 이 약관 내 용어의
              의미는 일반적인 이용관행에 의합니다. <br />
              <br />
              <Typo.b1> 제3조(약관 등의 명시와 설명 및 개정)</Typo.b1> <br />
              <br /> &nbsp; &nbsp; 1. 회사는 이 약관을 서비스 초기화면, 회원가입
              화면 및 “마이페이지” 메뉴 등에 게시하거나 기타의 방법으로 회원에게
              공지합니다.
              <br /> &nbsp; &nbsp; 2. 회사는 필요하다고 인정되는 경우, 관련법을
              위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.
              <br /> &nbsp; &nbsp; 3. 약관의 개정 내용이 회원의 권리 및 의무에
              중대한 영향을 미치는 경우에는 적용 일자 30일 전부터 서비스 내부
              알림 수단으로 개별 공지합니다.
              <br /> &nbsp; &nbsp; 4. 회원은 개정 약관에 동의하지 않을 경우, 제
              7조(서비스 이용계약의 종료)에 따른 회원 탈퇴 방법으로 거부 의사를
              표시할 수 있습니다. 단, 회사가 약관 개정 시 “개정 약관의 적용
              일자까지 회원이 거부 의사를 표시하지 아니할 경우 약관의 개정에
              동의한 것으로 간주한다”는 내용을 고지하였음에도 불구하고 회원이
              약관 개정에 대한 거부 의사를 표시하지 아니하면, 회사는 적용
              일자부로 개정 약관에 동의한 것으로 간주합니다.
              <br /> &nbsp; &nbsp; 5. 회원은 약관 일부분만을 동의 또는 거부할 수
              없습니다.
              <br /> &nbsp; &nbsp; 6. 회사는 제1항부터 제4항까지를
              준수하였음에도 불구하고 회원이 약관 개정 사실을 알지 못함으로써
              발생한 피해에 대해 회사의 고의 또는 중대한 과실이 없는 한 어떠한
              책임도 지지 않습니다.
              <br /> &nbsp; &nbsp;
              <br />
              <Typo.b1> 제 4조(서비스의 제공)</Typo.b1>
              <br />
              <br /> &nbsp; &nbsp;1. 회사는 다음 서비스를 제공합니다.
              <br /> &nbsp; &nbsp; &nbsp;- 주니어의 질문하기 서비스
              <br /> &nbsp; &nbsp; &nbsp;- 시니어의 답변하기 서비스
              <br /> &nbsp; &nbsp; &nbsp;- 질문과 답변 게시글 업로드 서비스
              <br /> &nbsp; &nbsp; &nbsp;- 뉴스레터 서비스
              <br /> &nbsp; &nbsp;2. 쥬잇씨는 50살을 기준으로 주니어와 시니어를
              구분하는 서비스입니다. 시니어 및 주니어 여부는 네이버 회원가입의
              생년월일 혹은 직접 입력한 생년월일을 기준으로 부여되며, 수정이
              불가합니다.
              <br /> &nbsp; &nbsp;3. 회사는 운영상, 기술상의 필요에 따라
              제공하고 있는 서비스를 변경할 수 있습니다.
              <br /> &nbsp; &nbsp;4. 회사는 이용자의 개인정보 및 서비스 이용
              기록에 따라 서비스 이용에 차이를 둘 수 있습니다.
              <br /> &nbsp; &nbsp;5. 회사는 설비의 보수, 교체, 점검 또는
              기간통신사업자의 서비스 중지, 인터넷 장애 등의 사유로 인해
              일시적으로 서비스 제공이 어려울 경우, 통보 없이 일시적으로 서비스
              제공을 중단할 수 있습니다.
              <br /> &nbsp; &nbsp;6. 회사는 천재지변, 전쟁, 경영 악화 등
              불가항력적인 사유로 인해 서비스를 더 이상 제공하기 어려울 경우,
              통보 없이 서비스 제공을 영구적으로 중단할 수 있습니다.
              <br /> &nbsp; &nbsp;7. 회사는 제4항부터 제6항까지 및 다음 내용으로
              인해 발생한 피해에 대해 회사의 고의 또는 중대한 과실이 없는 한
              어떠한 책임도 지지 않습니다.
              <br /> &nbsp; &nbsp; &nbsp;- 모든 서비스, 게시물, 이용 기록의
              진본성, 무결성, 신뢰성, 이용가능성의 보장
              <br /> &nbsp; &nbsp; &nbsp;- 서비스 이용 중 타인과 상호 간에
              합의한 내용
              <br /> &nbsp; &nbsp; &nbsp;- 게시물, 광고의 버튼, 하이퍼링크 등
              외부로 연결된 서비스와 같이 회사가 제공하지 않은 서비스에서 발생한
              피해
              <br /> &nbsp; &nbsp; &nbsp;- 회사가 관련 법령에 따라 요구되는
              보호조치를 이행하였음에도 불구하고, 네트워크의 안정성을 해치는
              행위 또는 악성 프로그램 등에 의하여 발생하는 예기치 못한 이용자의
              피해
              <br /> &nbsp; &nbsp; &nbsp;- 이용자의 귀책 사유 또는 회사의 귀책
              사유가 아닌 사유로 발생한 이용자의 피해
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

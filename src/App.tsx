import { SubMenuBox } from 'components/Mypage/SubMenuBox';
import React from 'react';

function App() {
  return (
    <div
      style={{
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: 30,
      }}
    >
      <SubMenuBox count={5} icon="myQnaIcon">
        내 질문
      </SubMenuBox>
      <SubMenuBox count={5} icon="myCommentIcon">
        내 댓글
      </SubMenuBox>
      <SubMenuBox count={5} icon="myScrapIcon">
        스크랩
      </SubMenuBox>
      <SubMenuBox count={-1} icon="newsLetterIcon">
        뉴스레터 구독
      </SubMenuBox>
      <SubMenuBox count={-1} icon="logoutIcon">
        로그아웃
      </SubMenuBox>
    </div>
  );
}

export default App;

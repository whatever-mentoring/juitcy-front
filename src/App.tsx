import { CommentListBox } from 'components/Mypage/CommentListBox';
import { MyQnaListBox } from 'components/Mypage/MyQnaListBox';
import { ScrapListBox } from 'components/Mypage/ScrapListBox';
import { SubMenuBox } from 'components/Mypage/SubMenuBox';
import { Waitingtab } from 'components/Mypage/WaitingTab';
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
      <Waitingtab />
      <SubMenuBox />
      <CommentListBox />
      <MyQnaListBox />
      <ScrapListBox />
    </div>
  );
}

export default App;

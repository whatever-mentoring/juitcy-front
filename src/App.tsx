import DesignTest from 'DesignTest';
import { CommentListBox } from 'components/Mypage/CommentListBox';
import { MyQnaListBox } from 'components/Mypage/MyQnaListBox';
import { ScrapListBox } from 'components/Mypage/ScrapListBox';
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
      <CommentListBox />
      <ScrapListBox />
      <MyQnaListBox />
    </div>
  );
}

export default App;

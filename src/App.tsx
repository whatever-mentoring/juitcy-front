import DesignTest from 'DesignTest';
import { CommentListBox } from 'components/CommentListBox';
import { MyQnaListBox } from 'components/MyQnaListBox';
import { ScrapListBox } from 'components/ScrapListBox';
import { Waitingtab } from 'components/WaitingTab';
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

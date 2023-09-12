import DesignTest from 'DesignTest';
import { CommentListBox } from 'components/CommentListBox';
import { MyQnaListBox } from 'components/MyQnaListBox';
import { ScrapListBox } from 'components/ScrapListBox';
import React from 'react';

function App() {
  return (
    <div>
      <CommentListBox />
      <ScrapListBox />
      <MyQnaListBox />
    </div>
  );
}

export default App;

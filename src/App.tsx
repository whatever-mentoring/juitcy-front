import { CommentListBox } from 'components/Mypage/CommentListBox';
import { MyQnaListBox } from 'components/Mypage/MyQnaListBox';
import { ScrapListBox } from 'components/Mypage/ScrapListBox';
import { Waitingtab } from 'components/Mypage/WaitingTab';
import Main from 'pages/Main';
import CardSlider from 'components/Main/CardSlider';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { styled } from 'styled-components';

function App() {
  return (
    <Div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </Div>
  );
}

export default App;

const Div = styled.div`
  width: 390px;
  border: 1px solid black;
  position: absolute;
`;

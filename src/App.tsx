import { Mypage } from 'pages/Mypage';
import { MyComment } from 'pages/Mypage/MyComment';
import { MyQna } from 'pages/Mypage/MyQna';
import { MyScrap } from 'pages/Mypage/MyScrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { styled } from 'styled-components';
import { Palette } from 'styles/Palette';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mypage />} />
        <Route path="/myQna" element={<MyQna />} />
        <Route path="/myComment" element={<MyComment />} />
        <Route path="/myScrap" element={<MyScrap />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import Main from 'pages/Main';
import Answer from 'pages/Answer';
import PostDetail from 'pages/Main/PostDetail';
import Search from 'pages/Main/Search';
import React from 'react';
import { Mypage } from 'pages/Mypage';
import { MyComment } from 'pages/Mypage/MyComment';
import { MyQna } from 'pages/Mypage/MyQna';
import { MyScrap } from 'pages/Mypage/MyScrap';
import { Provision } from 'pages/Mypage/Provision';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WriteAnswer from 'pages/Answer/WriteAnswer';
import Ask from 'pages/Ask';
import WriteQuestion from 'pages/Ask/WriteQuestion';
import Signup from 'pages/Signup';
import Oauth from 'pages/Signup/Oauth';
import TermsOfService from 'pages/Signup/TermsOfService';
import SignupSuccess from 'pages/Signup/SignupSuccess';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* MainPage */}
        <Route path="/" element={<Main />} />
        <Route path="/post/:idx" element={<PostDetail />} />
        <Route path="/search" element={<Search />} />

        {/* SignupPage */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/oauth" element={<Oauth />} />
        <Route path="/signup/terms" element={<TermsOfService />} />
        <Route path="/signup/success" element={<SignupSuccess />} />

        {/* AnswerPage */}
        <Route path="/answer" element={<Answer />} />
        <Route path="/answer/:idx" element={<WriteAnswer />} />

        {/* AskPage */}
        <Route path="/ask" element={<Ask />} />
        <Route path="/ask/write" element={<WriteQuestion />} />

        {/* MyPage */}
        <Route path="/myPage" element={<Mypage />} />
        <Route path="/myPage/myQna" element={<MyQna />} />
        <Route path="/myPage/myComment" element={<MyComment />} />
        <Route path="/myPage/myScrap" element={<MyScrap />} />
        <Route path="/myPage/provision" element={<Provision />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

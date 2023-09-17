import Main from 'pages/Main';
import PostDetail from 'pages/Main/PostDetail';
import Search from 'pages/Main/Search';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div style={{ width: '390px' }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

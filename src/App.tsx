import Main from 'pages/Main';
import Answer from 'pages/Answer';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WriteAnswer from 'pages/Answer/WriteAnswer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/answer" element={<Answer />} />
        <Route path="/answer/:id" element={<WriteAnswer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

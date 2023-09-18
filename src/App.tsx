import Main from 'pages/Main';
import Answer from 'pages/Main/Answer';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/answer" element={<Answer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React, { } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main.jsx"
import Mywork from "./pages/mywork.jsx"
import Resume from "./pages/resume.jsx"
import RAVAGE from "./pages/RAVAGE.jsx"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mywork" element={<Mywork />} />
        <Route path="/resume" element={<Resume />} />
        <Route path='/laresume.docx' />
        <Route path="*" element={<RAVAGE />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

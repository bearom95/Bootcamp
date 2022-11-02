import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import { Detail } from './pages/Detail';
import { Gallery } from './pages/Gallery';
import { Home } from './pages/Home';
import { Insert } from './pages/Insert';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="gallery/:id" element={<Detail />} />
          <Route path="insert" element={<Insert />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

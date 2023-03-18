import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home';
import UpdateJob from './components/Pages/UpdateJob';

function App() {
  return (
    <BrowserRouter>
      {/* <Navigation /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/videos/:videoId" element={<Video />} /> */}
        <Route path="/add" element={<UpdateJob />} />
        {/* <Route path="/videos/edit/:videoId" element={<Edit />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

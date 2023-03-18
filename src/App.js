import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Edit from './components/Pages/Edit';
import Home from './components/Pages/Home';
import UpdateJob from './components/Pages/UpdateJob';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/videos/:videoId" element={<Video />} /> */}
        <Route path="/add" element={<UpdateJob />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Map from './components/Map/Map';
import DataInput from './components/DataInput/DataInput';

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/map" element={<Map />} />
            <Route path="/data-input" element={<DataInput />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

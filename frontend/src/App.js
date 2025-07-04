import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Map from './components/Map/Map';
import DataInput from './components/DataInput/DataInput';
import Reports from './components/Reports/Reports';
import Dashboards from './components/Dashboards/Dashboards';
import Users from './components/Users/Users';
import Directories from './components/Directories/Directories';
import Login from './components/Login/Login';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Страница входа */}
        <Route path="/" element={<Login />} />

        {/* Все остальные страницы с левой панелью */}
        <Route
          path="*"
          element={
            <div style={{ display: "flex" }}>
              <Sidebar />
              <div style={{ flex: 1 }}>
                <Routes>
                  <Route path="/map" element={<Map />} />
                  <Route path="/data-input" element={<DataInput />} />
                  <Route path="/reports" element={<Reports />} />
                  <Route path="/dashboards" element={<Dashboards />} />
                  <Route path="/users" element={<Users />} />
                  <Route path="/directories" element={<Directories />} />
                </Routes>
              </div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

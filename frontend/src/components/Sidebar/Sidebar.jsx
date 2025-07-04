import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div style={{
      width: "220px",
      background: "#111",
      color: "#fff",
      padding: "20px",
      minHeight: "100vh"
    }}>
      <h2 style={{ marginTop: 0 }}>WPT</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li style={{ margin: "15px 0" }}>
          <NavLink to="/map" style={{ color: "#fff", textDecoration: "none" }}>
            Карта
          </NavLink>
        </li>
        <li style={{ margin: "15px 0" }}>
          <NavLink to="/data-input" style={{ color: "#fff", textDecoration: "none" }}>
            Ввод данных
          </NavLink>
        </li>
        <li style={{ margin: "15px 0" }}>
          <NavLink to="/reports" style={{ color: "#fff", textDecoration: "none" }}>
            Отчётность
          </NavLink>
        </li>
        <li style={{ margin: "15px 0" }}>
          <NavLink to="/dashboards" style={{ color: "#fff", textDecoration: "none" }}>
            Дашборды и графики
          </NavLink>
        </li>
        <li style={{ margin: "15px 0" }}>
          <NavLink to="/users" style={{ color: "#fff", textDecoration: "none" }}>
            Пользователи
          </NavLink>
        </li>
        <li style={{ margin: "15px 0" }}>
          <NavLink to="/directories" style={{ color: "#fff", textDecoration: "none" }}>
            Справочники
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

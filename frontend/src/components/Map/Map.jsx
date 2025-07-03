import React from 'react';

export default function Map() {
  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "sans-serif" }}>
      {/* Левое меню */}
      <div style={{
        width: "220px",
        background: "#111",
        color: "#fff",
        padding: "20px"
      }}>
        <h2 style={{ marginTop: 0 }}>WPT</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ margin: "15px 0" }}>Карта</li>
          <li style={{ margin: "15px 0" }}>Ввод данных</li>
          <li style={{ margin: "15px 0" }}>Отчётность</li>
          <li style={{ margin: "15px 0" }}>Дашборды и графики</li>
          <li style={{ margin: "15px 0" }}>Пользователи</li>
          <li style={{ margin: "15px 0" }}>Справочники</li>
        </ul>
      </div>

      {/* Контент */}
      <div style={{ flex: 1, position: "relative", background: "#fff" }}>
        {/* Шапка */}
        <div style={{
          position: "absolute",
          right: "20px",
          top: "20px",
          background: "#f0f0f0",
          padding: "10px 20px",
          borderRadius: "5px"
        }}>
          Кирилл Кириллов ▼
          <div style={{ fontSize: "0.8em", color: "#666" }}>Администратор</div>
        </div>

        {/* Белое поле по центру */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          fontSize: "2em",
          color: "#999"
        }}>
          Центр страницы (пока пусто)
        </div>
      </div>
    </div>
  );
}

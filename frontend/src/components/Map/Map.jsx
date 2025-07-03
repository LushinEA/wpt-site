import React from 'react';

export default function Map() {
  return (
    <div style={{
      position: "relative",
      background: "#fff",
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      fontSize: "2em",
      color: "#999"
    }}>
      Центр страницы (пока пусто)

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
    </div>
  );
}

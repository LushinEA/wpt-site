import React, { useState } from "react";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Авторизация:", email, password);
    // Здесь вставь реальный POST на /api/token/
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="login-text">
          Сбор данных<br />и отчёты<br />по перевозке<br />нефтепродуктов
        </div>
      </div>
      <div className="login-right">
        <form className="login-form" onSubmit={handleSubmit}>
          <h1>Вход в систему</h1>
          <input
            type="email"
            placeholder="Введите электронную почту"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Введите пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="login-links">
            <span>Забыли пароль?</span>
            <a href="#">Сбросить пароль</a>
          </div>
          <button type="submit">Войти</button>
          <div className="login-admin">
            Возникли проблемы? <a href="#">Напишите администратору</a>
          </div>
        </form>
      </div>
    </div>
  );
}

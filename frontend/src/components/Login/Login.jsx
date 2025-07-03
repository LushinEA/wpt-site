import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login", email, password);
    // Здесь можно сделать реальный fetch на /api/token/
    navigate("/map");
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h2>Сбор данных и отчёты<br />по перевозке нефтепродуктов</h2>
      </div>
      <div className="login-right">
        <form onSubmit={handleSubmit}>
          <h1>Вход в систему</h1>
          <input
            type="email"
            placeholder="Введите e-mail"
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
          <button type="submit">Войти</button>
          <div className="login-links">
            <a href="#">Забыли пароль?</a><br />
            <a href="#">Напишите администратору</a>
          </div>
        </form>
      </div>
    </div>
  );
}

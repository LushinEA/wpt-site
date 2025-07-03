import React, { useState } from "react";
import "./DataInput.css";
import DailySummaryForm from "../DailySummaryForm/DailySummaryForm";

export default function DataInput() {
  const [showDailyForm, setShowDailyForm] = useState(false);

  return (
    <div className="data-input-container">
      <h1>Ввод данных</h1>
      <div className="data-buttons">
        <div className="data-card">
          <h3>Ежесуточная сводка</h3>
          <button onClick={() => setShowDailyForm(true)}>Заполнить сводку</button>
        </div>
        <div className="data-card">
          <h3>Данные по Битуму</h3>
          <button>Заполнить отчёт</button>
        </div>
      </div>

      <div className="table">
        <h3>История отправленных отчётов</h3>
        <table>
          <thead>
            <tr>
              <th>Имя файла</th>
              <th>Тип</th>
              <th>Загрузил пользователь</th>
              <th>Дата загрузки</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Отчёт от 23 сентября</td>
              <td>Ежесуточная сводка</td>
              <td>Кирилл Кириллов</td>
              <td>23.09.2024</td>
              <td><button>Просмотр</button></td>
            </tr>
            {/* Примеры - потом заменим данными с API */}
          </tbody>
        </table>
      </div>

      {showDailyForm && <DailySummaryForm onClose={() => setShowDailyForm(false)} />}
    </div>
  );
}

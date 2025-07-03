import React from "react";
import "./DailySummaryForm.css";

export default function DailySummaryForm({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Ежесуточная сводка</h2>
        <form>
          <input type="date" />
          <input type="number" placeholder="Общее количество ТС" />
          <input type="number" placeholder="Общее количество ТС в ремонте" />
          <input type="number" placeholder="Общее количество ТС в простое без водителя" />
          <input type="number" placeholder="Общее количество ТС в простое без работы" />
          <input type="number" placeholder="Общее количество ТС в эксплуатации" />
          <div className="form-actions">
            <button type="submit">Отправить данные</button>
            <button type="button" onClick={onClose}>Отменить</button>
          </div>
        </form>
      </div>
    </div>
  );
}

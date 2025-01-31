import { formatCurrentMonth } from "../../helpers/dateFilter";
import { ResumeItem } from "../ResumeItem";
import "./index.css";

// Insira as props que faltam.
export const InfoArea = ({ currentMonth, onMonthChange, expense, income }) => {

  const handlePrevMonth = () => {
    let [year, month] = currentMonth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() - 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };

  const handleNextMonth = () => {
    let [year, month] = currentMonth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() + 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };

  return (
    <div className="info-container">
      <div className="monthArea">
        <div className="monthArrow" onClick={handlePrevMonth}>
          ⬅️
        </div>
        <div className="monthTitle">{formatCurrentMonth(currentMonth)}</div>
        <div className="monthArrow" onClick={handleNextMonth}>
          ➡️
        </div>
      </div>
      <div className="resumeArea">
        {/*
          Importe um ResumeItem para cada categoria: Receitas, Despesas e Balanço, declarando as props necessárias.
          No ResumeItem de Balanço, o value deve ser income-expense e a color fazer a verificação: income - expense < 0 ? "red" : "green"
        */}
        <ResumeItem value={income} color="green" title="Receitas" />
        <ResumeItem value={expense} color="red" title="Despesas"/>
        <ResumeItem value={income-expense} color={income-expense < 0 ? "red" : "green"} title="Balanço"/>
      </div>
    </div>
  );
};

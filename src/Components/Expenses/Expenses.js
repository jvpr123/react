import { useState } from "react";

import "./Expenses.css";

import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";

const Expenses = ({ expenses }) => {
  const [selectedYear, setSelectedYear] = useState("2020");

  const onYearFilterChange = (year) => setSelectedYear(year);
  const filterdExpenses = () => {
    return expenses.filter(
      (expense) => expense.date.getFullYear().toString() === selectedYear
    );
  };

  return (
    <Card className="expenses">
      <ExpenseFilter
        selectedYear={selectedYear}
        onYearFilterChange={onYearFilterChange}
      />

      <ExpensesChart expenses={filterdExpenses()} />

      <ExpensesList expenses={filterdExpenses} />
    </Card>
  );
};

export default Expenses;

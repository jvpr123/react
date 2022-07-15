import { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = ({ onExpenseCreation }) => {
  const [titleInput, setTitleInput] = useState("");
  const [amountInput, setAmountInput] = useState("");
  const [dateInput, setDateInput] = useState("");

  const handleTitleChange = ({ target }) => setTitleInput(target.value);
  const handleAmountChange = ({ target }) => setAmountInput(target.value);
  const handleDateChange = ({ target }) => setDateInput(target.value);
  const handleInputClear = () => {
    setTitleInput("");
    setAmountInput("");
    setDateInput("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const expenseDate = {
      id: Math.random().toString(),
      title: titleInput,
      amount: amountInput,
      date: new Date(dateInput),
    };

    onExpenseCreation(expenseDate);
    handleInputClear();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={titleInput} onChange={handleTitleChange} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amountInput}
            onChange={handleAmountChange}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2022-12-31"
            value={dateInput}
            onChange={handleDateChange}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

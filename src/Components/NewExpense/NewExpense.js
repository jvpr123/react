import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ onExpenseCreation }) => {
  return (
    <div className="new-expense">
      <ExpenseForm onExpenseCreation={onExpenseCreation} />
    </div>
  );
};

export default NewExpense;

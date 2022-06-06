import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
	const SaveExpenseDataHandler = function (expense) {
		// console.log(expenseData);
		const expenseData = {
			...expense,
			id: Math.random().toString(),
		};

		props.onAddExpense(expenseData);
	};

	return (
		<div className="new-expense">
			<ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} />
		</div>
	);
}

export default NewExpense;

import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
	const [isEditing, setIsEditing] = useState(false);

	const SaveExpenseDataHandler = function (expense) {
		// console.log(expenseData);
		const expenseData = {
			...expense,
			id: Math.random().toString(),
		};

		props.onAddExpense(expenseData);
		setIsEditing(false);
	};

	const startEditingHandler = function () {
		setIsEditing(true);
	};

	const stopEditingHandler = function () {
		setIsEditing(false);
	};

	return (
		<div className="new-expense">
			{!isEditing && (
				<div className="new-expense__group">
					<button type="button" onClick={startEditingHandler} className="new-expense__btn">
						Add New Expense
					</button>
				</div>
			)}
			{isEditing && <ExpenseForm onCancel={stopEditingHandler} onSaveExpenseData={SaveExpenseDataHandler} />}
		</div>
	);
}

export default NewExpense;

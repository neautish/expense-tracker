import React, { useState } from "react";

import "./ExpenseForm.css";

function ExpenseForm(props) {
	const [title, setTitle] = useState("");
	const [amount, setAmount] = useState("");
	const [date, setDate] = useState("");

	const titleChangeHandler = function (e) {
		setTitle(e.target.value);
	};
	const amountChangeHandler = function (e) {
		setAmount(e.target.value);
	};
	const dateChangeHandler = function (e) {
		setDate(e.target.value);
	};

	const submitHandler = function (e) {
		e.preventDefault();

		const expenseData = {
			title: title,
			amount: +amount,
			date: new Date(date),
		};

		props.onSaveExpenseData(expenseData);

		setTitle("");
		setAmount("");
		setDate("");
	};

	return (
		<div>
			<form className="new-expense__form" onSubmit={submitHandler}>
				<div className="new-expense__group">
					<label>Title</label>
					<input type="text" placeholder="Enter title" required value={title} onChange={titleChangeHandler} />
				</div>
				<div className="new-expense__group">
					<label>Amount</label>
					<input type="number" min="1" step="1" placeholder="Enter amount" required value={amount} onChange={amountChangeHandler} />
				</div>
				<div className="new-expense__group">
					<label>Date</label>
					<input type="date" min="2020-01-01" max="2023-12-31" required value={date} onChange={dateChangeHandler} />
				</div>
				<div className="new-expense__btn-group">
					<button type="button" onClick={props.onCancel} className="new-expense__btn new-expense__btn--cancel">
						Cancel
					</button>
					<button type="submit" className="new-expense__btn new-expense__btn--submit">
						Add Expense
					</button>
				</div>
			</form>
		</div>
	);
}

export default ExpenseForm;

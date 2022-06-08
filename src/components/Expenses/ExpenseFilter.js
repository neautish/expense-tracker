import React from "react";
import Chart from "../Chart/Chart";
import "./ExpenseFilter.css";

function ExpenseFilter(props) {
	const yearChangeHandler = function (e) {
		props.onSelectYear(e.target.value);
	};

	const chartDataPoints = [
		{ label: "Jan", value: 0 },
		{ label: "Feb", value: 0 },
		{ label: "Mar", value: 0 },
		{ label: "Apr", value: 0 },
		{ label: "May", value: 0 },
		{ label: "Jun", value: 0 },
		{ label: "Jul", value: 0 },
		{ label: "Aug", value: 0 },
		{ label: "Sep", value: 0 },
		{ label: "Oct", value: 0 },
		{ label: "Nov", value: 0 },
		{ label: "Dec", value: 0 },
	];

	for (const expense of props.expenses) {
		const expenseMonth = expense.date.getMonth();
		chartDataPoints[expenseMonth].value += expense.amount;
	}

	return (
		<div className="expense-filter">
			<div className="expense-filter__header">
				<label className="expense-filter__header--title">Filter by year</label>
				<select className="expense-filter__header--select" value={props.selected} onChange={yearChangeHandler}>
					<option value="2020">2020</option>
					<option value="2021">2021</option>
					<option value="2022">2022</option>
					<option value="2023">2023</option>
				</select>
			</div>
			<Chart dataPoints={chartDataPoints} />
		</div>
	);
}

export default ExpenseFilter;

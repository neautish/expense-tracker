import React from "react";
import Chart from "../Chart/Chart";
import "./ExpenseFilter.css";

function ExpenseFilter(props) {
	const yearChangeHandler = function (e) {
		props.onSelectYear(e.target.value);
	};

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
			<Chart />
		</div>
	);
}

export default ExpenseFilter;

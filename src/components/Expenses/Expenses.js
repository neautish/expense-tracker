import { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";

function Expenses(props) {
	const [selectedYear, setSelectedYear] = useState("2022");

	const selectYearHandler = function (year) {
		setSelectedYear(year);
	};

	// Filtered Expenses By Year
	const filteredExpenses = props.items.filter((item) => item.date.getFullYear().toString() === selectedYear);

	return (
		<div>
			<ExpenseFilter expenses={filteredExpenses} selected={selectedYear} onSelectYear={selectYearHandler} />
			<ExpensesList items={filteredExpenses} />
		</div>
	);
}

export default Expenses;

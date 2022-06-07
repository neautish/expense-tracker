import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpenseFilter from "./ExpenseFilter";
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
			<ExpenseFilter selected={selectedYear} onSelectYear={selectYearHandler} />
			<ExpensesList items={filteredExpenses} />
		</div>
	);
}

export default Expenses;

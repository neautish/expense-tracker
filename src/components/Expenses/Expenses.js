import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";

function Expenses(props) {
	const [selectedYear, setSelectedYear] = useState("2022");

	const selectYearHandler = function (year) {
		setSelectedYear(year);
	};

	// Filtered Expenses By Year
	const filteredExpenses = props.items.filter((item) => item.date.getFullYear().toString() === selectedYear);

	// Show a message if there is NO Expenses
	let expenses = <p className="no-expeses-message">No expenses found for &rarr; '{selectedYear}'</p>;

	// Render expenses
	if (filteredExpenses.length > 0) {
		expenses = filteredExpenses.map((item) => <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />);
	}

	return (
		<div>
			<ExpenseFilter selected={selectedYear} onSelectYear={selectYearHandler} />
			<div className="expenses">{expenses}</div>
		</div>
	);
}

export default Expenses;

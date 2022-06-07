import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList(props) {
	// Show a message if there is NO Expenses
	if (props.items.length === 0) {
		return <p className="no-expeses-message">No expenses found!</p>;
	}

	// Render expenses
	return (
		<ul className="expenses">
			{props.items.map((item) => (
				<ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />
			))}
		</ul>
	);
}

export default ExpensesList;

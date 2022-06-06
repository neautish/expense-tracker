import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
	// let title = props.title;
	const [title, setTitle] = useState(props.title);

	const clickHandler = function () {
		console.log(title);
		setTitle("title changed");
		console.log(title);
	};

	return (
		<div className="expense-item">
			<ExpenseDate date={props.date} />
			<div className="expense-item__description">
				<h2>{title}</h2>
				<div className="expense-item__price">${props.amount}</div>
			</div>
			<button onClick={clickHandler}>change text</button>
		</div>
	);
}

export default ExpenseItem;

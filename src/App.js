import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
	const expenses = [
		{
			title: "Car Insurance",
			amount: 250.25,
			date: new Date(2022, 2, 30),
		},
		{
			title: "Car New Tires",
			amount: 750.36,
			date: new Date(2021, 3, 28),
		},
		{
			title: "Car Oil Changing",
			amount: 25,
			date: new Date(2019, 3, 23),
		},
		{
			title: "Car Polish",
			amount: 50.15,
			date: new Date(2020, 5, 5),
		},
	];

	const [allExpenses, setAllExpenses] = useState(expenses);

	const addExpenseHandler = function (expense) {
		console.log(expense);

		setAllExpenses(() => {
			allExpenses.push(expense);
		});
		console.log(expenses);
	};

	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses items={allExpenses} />
		</div>
	);
}

export default App;

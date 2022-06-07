import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_EXPENSES = [
	{
		id: "ei1",
		title: "Car Insurance",
		amount: 250.25,
		date: new Date(2022, 2, 30),
	},
	{
		id: "ei2",
		title: "Car New Tires",
		amount: 750.36,
		date: new Date(2021, 3, 28),
	},
	{
		id: "ei3",
		title: "Car Oil Changing",
		amount: 25,
		date: new Date(2023, 3, 23),
	},
	{
		id: "ei4",
		title: "Car Polish",
		amount: 50.15,
		date: new Date(2022, 5, 5),
	},
];

function App() {
	const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

	const addExpenseHandler = function (expense) {
		console.log(expense);

		setExpenses((prevExpenses) => {
			return [expense, ...prevExpenses];
		});
	};

	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses items={expenses} />
		</div>
	);
}

export default App;

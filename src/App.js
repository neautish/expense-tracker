import ExpenseItem from "./components/ExpenseItem";

function App() {
	const expense = [
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

	return (
		<div>
			<h1>lets get started</h1>
			<ExpenseItem title={expense[0].title} amount={expense[0].amount} date={expense[0].date} />
			<ExpenseItem title={expense[1].title} amount={expense[1].amount} date={expense[1].date} />
			<ExpenseItem title={expense[2].title} amount={expense[2].amount} date={expense[2].date} />
			<ExpenseItem title={expense[3].title} amount={expense[3].amount} date={expense[3].date} />
		</div>
	);
}

export default App;

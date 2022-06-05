import Expenses from "./components/Expenses";

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

	return (
		<div>
			<Expenses items={expenses} />
		</div>
	);
}

export default App;

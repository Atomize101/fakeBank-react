import React, { useEffect, useState } from 'react';
import './App.css';
import { getBalance } from './service/api';

function App() {
	const [accounts, setAccounts] = useState([]);
	const [number1, setNumber1] = useState(3);
	const [number2, setNumber2] = useState(1);
	const [total, setTotal] = useState(0);

	useEffect(() => {
		getBalance().then(setAccounts);
		//console.log(accounts);
	}, [accounts]);

	//	const calculateTotal = () => {
	//		setTotal(number1 + number2);
	//		console.log(total);
	//	};

	var sum = accounts.reduce(function (a, b) {
		return a + b;
	}, 0);

	//console.log(sum);

	return (
		<>
			<div className="App">
				<div>
					<h1>
						Total Charges:
						<div className="Total">{total}</div>
					</h1>
					{accounts.map((account) => (
						<div className="balance">
							<h2 key={account.id}>{account['Transaction-Date']}</h2>
							<h2 key={account.id[1]}>Description: {account.Description}</h2>
							<h3 key={account.id[2]}>Category: {account.Category}</h3>
							<h3 key={account.id[3]}>Debit: {account.Debit}</h3>
							<h3 key={account.id[4]}>Credit:{account.Credit}</h3>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export default App;

import React, { useEffect, useState } from 'react';
import './App.css';
import { getBalance } from './service/api';
import Total from './components/Total';

function App() {
	const [accounts, setAccounts] = useState([]);

	useEffect(() => {
		getBalance().then(setAccounts);
		console.log(accounts);
	}, []);

	//let accountTotal = accounts.reduce((a, b) => a.Credit + b.Debit, 0);
	//let accountTotal = account.reduce((account.Debit, account.Credit) => account.Debit + account.Credit, 0);
	//let theAccountTotal = accounts.map((account) => account.Credit + account.Debit);

	//let accountTotal = accounts.map((account) => account.Credit).reduce((prev, next) => prev + next);

	function sum(arr) {
		return arr.reduce((total, num) => {
			return total + num;
		}, 0);
	}

	return (
		<>
			<div className="App">
				<div>
					{accounts.map((account) => (
						<div>
							<br />

							<h2 key={account.id}>{account['Transaction-Date']}</h2>
							<h2 key={account.id[1]}>Description: {account.Description}</h2>
							<h3 key={account.id[2]}>Category: {account.Category}</h3>
							<h3 key={account.id[3]}>Debit: {account.Debit}</h3>
							<h3 key={account.id[4]}>Credit:{account.Credit}</h3>
							<h3 className="container">Total Charges: {account.Credit + account.Debit}</h3>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export default App;

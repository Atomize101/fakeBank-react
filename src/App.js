import React, { useEffect, useState } from 'react';
import './App.css';
import { getBalance } from './service/api';

function App() {
	const [accounts, setAccounts] = useState([]);

	useEffect(() => {
		getBalance().then(setAccounts);
	}, []);

	const accountTotal = accounts.reduce((totalAccounts, account) => totalAccounts + account.Debit + account.Credit, 0);
	console.log(accountTotal);

	return (
		<>
			<div className="App">
				<div>
					<h1>
						Total Charges:
						<div className="Total">{accountTotal}</div>
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

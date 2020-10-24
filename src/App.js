import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
	const [accounts, setAccounts] = useState([]);
	const baseURL = 'https://sampleapis.com/fakebank/api/Accounts';

	//useEffect(() => {
	//	fetch(baseURL).then((response) => response.json().then(setAccounts));
	//}, []);

	useEffect(() => {
		fetch(baseURL).then((response) => response.json().then(setAccounts));
	}, []);

	//fetch(baseURL)
	//	.then((resp) => {
	//		return resp.json();
	//	})

	//	.then((data) => console.log(data));

	return (
		<>
			<div className="App">
				{accounts.map((account) => (
					<div>
						<h2 key={account.id}>{account['Transaction-Date']}</h2>
						<h3 key={account.id[1]}>Description: {account.Description}</h3>
						<h4 key={account.id[2]}>Category: {account.Category}</h4>
						<h4 key={account.id[3]}>Debit: {account.Debit}</h4>
						<h4 key={account.id[4]}>
							Credit:
							{account.Credit}
						</h4>
					</div>
				))}
			</div>
		</>
	);
}

export default App;

//Testing
//{accounts.map((account) => (
//				<button key={id}>{account}</button>
//			))}

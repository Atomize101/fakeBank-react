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
		<div className="App">
			<p>{console.log(accounts[0])}</p>
		</div>
	);
}

export default App;

//Testing
//{accounts.map((account) => (
//				<button key={account}>{account}</button>
//			))}

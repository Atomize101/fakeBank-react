import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
	const [accounts, setAccounts] = useState([]);
	//const baseURL = 'https://sampleapis.com/fakebank/api/Accounts';

	//useEffect(() => {
	//	fetch(baseURL).then((response) => response.json().then(setAccounts));
	//}, []);
	const baseURL = 'https://sampleapis.com/fakebank/api/Accounts';

	fetch(baseURL)
		.then((resp) => {
			return resp.json();
		})

		.then((data) => console.log(data));

	return (
		<div className="App">
			{accounts.map((account) => (
				<button key={account}>{account}</button>
			))}
		</div>
	);
}

export default App;

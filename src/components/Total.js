import React from 'react';

const Total = ({ accounts }) => {
	console.log(accounts[0]);
	const total = accounts.reduce((prevValue, currentValue) => prevValue + currentValue, 0);
	return <p>Totalzzz: {accounts}</p>;
};

export default Total;

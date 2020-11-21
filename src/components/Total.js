import React from 'react';

const Total = ({ accountTotal }) => {
	console.log(accountTotal);
	return (
		<div>
			<h1>
				Total Charges:
				<div className="container">{accountTotal}</div>
			</h1>
		</div>
	);
};

export default Total;

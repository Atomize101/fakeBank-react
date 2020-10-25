const baseURL = 'https://sampleapis.com/fakebank/api/Accounts';

export const getBalance = () => {
	return fetch(baseURL).then((response) => response.json());
};

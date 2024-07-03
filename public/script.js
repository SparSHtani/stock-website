const url = 'https://financial-modeling-prep.p.rapidapi.com/v4/insider-roaster/AAPL';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'fb0a07a984mshbde32d932e6697fp14d147jsn9f1d310afc85',
		'x-rapidapi-host': 'financial-modeling-prep.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
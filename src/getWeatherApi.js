console.log("hey i'm background script :)");

const weatherApiKey = process.env.WEATHER_API_KEY;
const weatherResponse = fetch(
	`https://api.openweathermap.org/data/2.5/weather?lat=34.05&lon=-118.24&appid=${weatherApiKey}`
)
	.then((response) => response.json())
	.then((data) => {
		console.log(data);
	});

console.log(weatherResponse);

const url = 'https://weather-api-by-any-city.p.rapidapi.com/weather/Rajshahi';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '177d5f0faamshf05524140413284p176754jsnb5598a3351b9',
		'x-rapidapi-host': 'weather-api-by-any-city.p.rapidapi.com'
	}
};

async function getWeather() {
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
};

getWeather();
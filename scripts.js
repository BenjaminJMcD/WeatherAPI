
async function getWeather(location) {

    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=1b39ce7977d24e5bb6a183739240202&q=${location}`, {mode:'cors'})

    return console.log(response.json());
};

getWeather("kansas_city");

async function getForecast(location) {

    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=1b39ce7977d24e5bb6a183739240202&q=${location}&days=3`, {mode:'cors'})

    return console.log(response.json());
}

getForecast("kansas_city");
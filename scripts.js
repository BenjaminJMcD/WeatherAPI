// SEARCH
const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", function() {
    return getWeather(cityInput.value)
});

getWeather("kansas_city");

// CURRENT

const current = document.getElementById("current");

const cityName = document.getElementById("city");
const conditionImgCurrent = document.getElementById("conditionImg-current");
const conditionCurrent = document.getElementById("condition-current");
const tempCurrent = document.getElementById("temp-current");
const humidity = document.getElementById("humidity");
const feelsLikeTemp = document.getElementById("feelsLikeTemp");
const wind = document.getElementById("wind");


async function getWeather(location) {

    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=1b39ce7977d24e5bb6a183739240202&q=${location}`, {mode:'cors'})

    const info = await response.json();

    cityName.innerText = await info.location.name;
    conditionImgCurrent.src = await info.current.condition.icon;
    conditionCurrent.innerText = await info.current.condition.text;
    tempCurrent.innerText = await info.current.temp_f;

    humidity.innerText = await info.current.humidity;
    feelsLikeTemp.innerText = await info.current.feelslike_f;
    wind.innerText = await info.current.wind_mph;

};



async function getForecast(location) {

    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=1b39ce7977d24e5bb6a183739240202&q=${location}&days=3`, {mode:'cors'})

    return console.log(response.json());
}

getForecast("kansas_city");


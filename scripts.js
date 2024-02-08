// SEARCH
const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", function() {
    getWeather(cityInput.value);
    getForecast(cityInput.value);
});

getWeather("kansas_city");
getForecast("kansas_city");

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

    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=1b39ce7977d24e5bb6a183739240202&q=${location}`, {mode:'cors'})

    const info = await response.json();

    cityName.innerText = await info.location.name;
    conditionImgCurrent.src = await info.current.condition.icon;
    conditionCurrent.innerText = await info.current.condition.text;
    tempCurrent.innerText = await info.current.temp_f;
    humidity.innerText = await info.current.humidity;
    feelsLikeTemp.innerText = await info.current.feelslike_f;
    wind.innerText = await info.current.wind_mph;

};

const date1 = document.getElementById("date1");
const max1 = document.getElementById("max1");
const min1 = document.getElementById("min1");
const img1 = document.getElementById("img1");
const cond1 = document.getElementById("condText1");

const date2 = document.getElementById("date2");
const max2 = document.getElementById("max2");
const min2 = document.getElementById("min2");
const img2 = document.getElementById("img2");
const cond2 = document.getElementById("condText2");

async function getForecast(location) {

    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=1b39ce7977d24e5bb6a183739240202&q=${location}&days=3`, {mode:'cors'})

    const info = await response.json();

    date1.innerText = await info.forecast.forecastday[1].date;
    max1.innerText = await info.forecast.forecastday[1].day.maxtemp_f;
    min1.innerText = await info.forecast.forecastday[1].day.mintemp_f;
    img1.src = await info.forecast.forecastday[1].day.condition.icon;
    cond1.innerText = await info.forecast.forecastday[1].day.condition.text;

    date2.innerText = await info.forecast.forecastday[2].date;
    max2.innerText = await info.forecast.forecastday[2].day.maxtemp_f;
    min2.innerText = await info.forecast.forecastday[2].day.mintemp_f;
    img2.src = await info.forecast.forecastday[2].day.condition.icon;
    cond2.innerText = await info.forecast.forecastday[2].day.condition.text;
}


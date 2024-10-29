<<<<<<< HEAD
function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#wind-speed");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);

  cityElement.innerHTML = response.data.city;
  timeElement.innerHTML = formatDate(date);
  descriptionElement.innerHTML = response.data.coditionn.description;
  humidityElement.innerHTML = '{response.data.temperature.humidity}%';
  windSpeedElement.innerHTML = '${response.data.wind.speed}km/h';
  temperatureElement.innerHTML = Math.round(temperature);
}

function formatDate(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[date.getDay()];
}

if (minutes < 10) {
  minutes = '0${minutes}';

return '${day} ${hours}:${minutes}';
}

function searchCity(city) {
  let apiKey = "b2a5adcct04b33178913oc335f405433";
  let apiUrl =
    "https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unites=metric";
  axios.get(apiUrl).then(refreshWeather);
=======
function refreshWeather (response) {
  let temperatureElement= document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement= document.querySelector("#city");

  cityElement,innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity (city) {
 let apiKey = "b2a5adcct04b33178913oc335f405433";
 let apiUrl = 'https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unites=metric';
 axios.get(apiUrl).then(refreshWeather);
>>>>>>> 2eeea50f3e8ec7f69417f20e3ae3320280bcf5c6
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
<<<<<<< HEAD

=======
 
>>>>>>> 2eeea50f3e8ec7f69417f20e3ae3320280bcf5c6
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

<<<<<<< HEAD
searchCity("Paris");
=======
searchCity("Paris");
>>>>>>> 2eeea50f3e8ec7f69417f20e3ae3320280bcf5c6

const weatherimg = document.querySelector(".weather-img");
const humidity = document.querySelector(".-humidity");
const wind_speed = document.querySelector(".wind-speed");
const searchBox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weekimg = document.querySelector("img");

let currentDate = new Date();
let daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let dayOfWeek = daysOfWeek[currentDate.getDay()];
let dayOfMonth = currentDate.getDate();
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[currentDate.getMonth()];
let year = currentDate.getFullYear();
let formattedDate = dayOfWeek + ", " + dayOfMonth + " " + month + " " + year;

document.querySelector(".date").innerHTML = formattedDate;

async function checkWeather() {
  const apikey = "ac7cdc20b49facdb25862d9fc16a501f";
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=wigan&units=metric";
  const response = await fetch(apiUrl + `&appid=${apikey}`);
  var data = await response.json();
  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML =
    Math.round(data.main.temp) + " °C";
  document.querySelector(".descrip").innerHTML = data.weather[0].description;
  humidity.innerHTML = data.main.humidity + "%";
  wind_speed.innerHTML = data.wind.speed + " km/h";
  document.querySelector(".rainfall").innerHTML = data.rain?.["1h"] + " mm/h";
  document.querySelector(".minimum").innerHTML = data.main.temp_min + " °C";
  document.querySelector(".maximum").innerHTML = data.main.temp_max + " °C";

  if (data.weather[0].main == "Clouds") {
    weekimg.src = "Images/cloudy.png";
  } else if (data.weather[0].main == "Rain") {
    weekimg.src = "Images/rain.png";
  } else if (data.weather[0].main == "Clear") {
    weekimg.src = "Images/clear.png";
  } else if (data.weather[0].main == "Drizzle") {
    weekimg.src = "drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weekimg.src = "Images/mist.png";
  } else if (data.weather[0].main == "Snow") {
    weekimg.src = "Images/snow.png";
  }
}

checkWeather();

async function CheckWeather(city) {
  const apikey = "ac7cdc20b49facdb25862d9fc16a501f";
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
  const response = await fetch(apiUrl + city + `&appid=${apikey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
    document.querySelector(".weather-details").style.display = "none";
    document.querySelector(".line").style.display = "none";
    document.querySelector(".date").style.display = "none";

    return;
  }
  document.querySelector(".weather").style.display = "block";
  document.querySelector(".weather-details").style.display = "block";
  document.querySelector(".date").style.display = "block";
  document.querySelector(".line").style.display = "block";
  document.querySelector(".error").style.display = "none";
  var data = await response.json();
  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML =
    Math.round(data.main.temp) + " °C";
  document.querySelector(".descrip").innerHTML = data.weather[0].description;
  humidity.innerHTML = data.main.humidity + "%";
  wind_speed.innerHTML = data.wind.speed + " km/h";

  document.querySelector(".rainfall").innerHTML = data.rain?.["1h"] + " mm/h";

  if (data.weather[0].main == "Clouds") {
    weatherimg.src = "Images/cloudy.png";
  } else if (data.weather[0].main == "Rain") {
    weatherimg.src = "Images/rain.png";
  } else if (data.weather[0].main == "Clear") {
    weatherimg.src = "Images/clear.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherimg.src = "drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherimg.src = "Images/mist.png";
  } else if (data.weather[0].main == "Snow") {
    weatherimg.src = "Images/snow.png";
  }
}
searchbtn.addEventListener("click", () => {
  CheckWeather(searchBox.value);
});

var input = document.getElementById("myinput");
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("mybtn").click();
  }
});

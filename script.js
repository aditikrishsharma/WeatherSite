const apiKey = "31e5e587ad2766e3c0c74cae23e19e73";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const SearchBox = document.querySelector(".search input");
const SearchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weathericon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status === 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "./cloud.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "./clear.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "./drizzle.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "./rain.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "./mist   .png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

SearchBtn.addEventListener("click", () => {
  checkWeather(SearchBox.value);
});

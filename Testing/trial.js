if (localStorage.getItem("Weather")) {
  // if yes, retrieve the data and display it on the page
  let data = JSON.parse(localStorage.getItem("Weather"));
  // ... display data on the page ...
  let len = data.length;
  document.querySelector(".temp").innerHTML = data[len - 1].Temperature + "°C";
  document.querySelector(".descrip").innerHTML = data[len - 1].Descrip;
  document.querySelector(".-humidity").innerHTML = data[len - 1].Humidity + "%";
  document.querySelector(".wind-speed").innerHTML =
    data[len - 1].Wind_Speed + " Km/h";
  document.querySelector(".minimum").innerHTML = data[len - 1].Min_temp + "°C";
  document.querySelector(".maximum").innerHTML = data[len - 1].Max_temp + "°C";
  document.querySelector(".date").innerHTML =
    data[len - 1].date + ", " + data[len - 1].Day;

  if (data[len - 1].MainDescrip == "Clouds") {
    document.querySelector(".weather-img").src = "Images/cloudy.png";
  } else if (data[len - 1].MainDescrip == "Rain") {
    document.querySelector(".weather-img").src = "Images/rain.png";
  } else if (data[len - 1].MainDescrip == "Clear") {
    document.querySelector(".weather-img").src = "Images/clear.png";
  } else if (data[len - 1].MainDescrip == "Drizzle") {
    document.querySelector(".weather-img").src = "Images/drizzle.png";
  } else if (data[len - 1].MainDescrip == "Mist") {
    document.querySelector(".weather-img").src = "Images/mist.png";
  } else if (data[len - 1].MainDescrip == "Snow") {
    document.querySelector(".weather-img").src = "Images/snow.png";
  }

  for (var i = 0; i < data.length; i++) {
    document.querySelector(".temperature-" + i).style.fontWeight = 100;
    document.querySelector(".temperature-" + i).innerHTML =
      "Temp: " + data[i].Temperature + "°C";
    document.querySelector(".des" + i).innerHTML = data[i].Descrip;
    document.querySelector(".date-" + i).innerHTML = data[i].Day;

    if (data[i].MainDescrip == "Clouds") {
      document.querySelector(".img-" + i).src = "Images/cloudy.png";
    } else if (data[i].MainDescrip == "Rain") {
      document.querySelector(".img-" + i).src = "Images/rain.png";
    } else if (data[i].MainDescrip == "Clear") {
      document.querySelector(".img-" + i).src = "Images/clear.png";
    } else if (data[i].MainDescrip == "Drizzle") {
      document.querySelector(".img-" + i).src = "Images/drizzle.png";
    } else if (data[i].MainDescrip == "Mist") {
      document.querySelector(".img-" + i).src = "Images/mist.png";
    } else if (data[i].MainDescrip == "Snow") {
      document.querySelector(".img-" + i).src = "Images/snow.png";
    }
  }
} else {
  // if not, make a network request to fetch the data from the server
  // if not, make a network request to fetch the data from the server
  fetch("fetch.php")
    .then((response) => response.json())
    .then((data) => {
      // store the data in localStorage for future use
      localStorage.setItem("Weather", JSON.stringify(data));
      // ... display data on the page ...
      let len = data.length;
      document.querySelector(".temp").innerHTML =
        data[len - 1].Temperature + "°C";
      document.querySelector(".descrip").innerHTML = data[len - 1].Descrip;
      document.querySelector(".-humidity").innerHTML =
        data[len - 1].Humidity + "%";
      document.querySelector(".wind-speed").innerHTML =
        data[len - 1].Wind_Speed + " Km/h";
      document.querySelector(".minimum").innerHTML =
        data[len - 1].Min_temp + "°C";
      document.querySelector(".maximum").innerHTML =
        data[len - 1].Max_temp + "°C";
      document.querySelector(".date").innerHTML =
        data[len - 1].date + ", " + data[len - 1].Day;

      if (data[len - 1].MainDescrip == "Clouds") {
        document.querySelector(".weather-img").src = "Images/cloudy.png";
      } else if (data[len - 1].MainDescrip == "Rain") {
        document.querySelector(".weather-img").src = "Images/rain.png";
      } else if (data[len - 1].MainDescrip == "Clear") {
        document.querySelector(".weather-img").src = "Images/clear.png";
      } else if (data[len - 1].MainDescrip == "Drizzle") {
        document.querySelector(".weather-img").src = "Images/drizzle.png";
      } else if (data[len - 1].MainDescrip == "Mist") {
        document.querySelector(".weather-img").src = "Images/mist.png";
      } else if (data[len - 1].MainDescrip == "Snow") {
        document.querySelector(".weather-img").src = "Images/snow.png";
      }

      for (var i = 0; i < data.length; i++) {
        document.querySelector(".temperature-" + i).style.fontWeight = 100;
        document.querySelector(".temperature-" + i).innerHTML =
          "Temp: " + data[i].Temperature + "°C";
        document.querySelector(".des" + i).innerHTML = data[i].Descrip;
        document.querySelector(".date-" + i).innerHTML = data[i].Day;

        if (data[i].MainDescrip == "Clouds") {
          document.querySelector(".img-" + i).src = "Images/cloudy.png";
        } else if (data[i].MainDescrip == "Rain") {
          document.querySelector(".img-" + i).src = "Images/rain.png";
        } else if (data[i].MainDescrip == "Clear") {
          document.querySelector(".img-" + i).src = "Images/clear.png";
        } else if (data[i].MainDescrip == "Drizzle") {
          document.querySelector(".img-" + i).src = "Images/drizzle.png";
        } else if (data[i].MainDescrip == "Mist") {
          document.querySelector(".img-" + i).src = "Images/mist.png";
        } else if (data[i].MainDescrip == "Snow") {
          document.querySelector(".img-" + i).src = "Images/snow.png";
        }
      }
    })
    .catch((error) => {
      console.log(error);
    });
}



function getweatherdata(){
  fetch("insert.php?city=" + wigan) // Replace with your insert PHP script
  .then(() => {
    // Insertion is complete, do any additional processing or UI updates
    console.log("Data inserted successfully");

    // Now fetch the data for JavaScript display
    fetch("fetch.php?city=" + wigan) // Replace with your fetch PHP script
      .then((response) => response.json())
      .then((data) => {
        // Process the retrieved data and update the UI
        console.log(data);
        // Rest of your code to update the UI with the data
        let len = data.length;
        document.querySelector(".temp").innerHTML =
          data[len - 1].Temperature + "°C";
        document.querySelector(".descrip").innerHTML =
          data[len - 1].Descrip;
        document.querySelector(".-humidity").innerHTML =
          data[len - 1].Humidity + "%";
        document.querySelector(".wind-speed").innerHTML =
          data[len - 1].Windspeed + " Km/h";
        document.querySelector(".minimum").innerHTML =
          data[len - 1].Min_Temp + "°C";
        document.querySelector(".maximum").innerHTML =
          data[len - 1].Max_Temp + "°C";
        document.querySelector(".date").innerHTML =
          data[len - 1].date + ", " + data[len - 1].Day;
        document.querySelector(".city").innerHTML = data[len - 1].City_Name;

        console.log("Hello");

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
          document.querySelector(
            ".temperature-" + i
          ).style.fontWeight = 100;
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
        let cityname = document.getElementById("city").value;
        console.log(cityname);
        localStorage.setItem("weatherData", JSON.stringify(data));
        window.addEventListener("load", () => {
          if ("serviceWorker" in navigator) {
            navigator.serviceWorker.register("service-worker.js");
          }
        });
      });
    });
}
getweatherdata();

document
  .getElementById("searchForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting
    var city = document.getElementById("city").value;

    // Make separate fetch requests for inserting PHP data and displaying JavaScript data
    fetch("insert.php?city=" + city) // Replace with your insert PHP script
      .then(() => {
        // Insertion is complete, do any additional processing or UI updates
        console.log("Data inserted successfully");

        // Now fetch the data for JavaScript display
        fetch("fetch.php?city=" + city) // Replace with your fetch PHP script
          .then((response) => response.json())
          .then((data) => {
            // Process the retrieved data and update the UI
            console.log(data);
            // Rest of your code to update the UI with the data
            let len = data.length;
            document.querySelector(".temp").innerHTML =
              data[len - 1].Temperature + "°C";
            document.querySelector(".descrip").innerHTML =
              data[len - 1].Descrip;
            document.querySelector(".-humidity").innerHTML =
              data[len - 1].Humidity + "%";
            document.querySelector(".wind-speed").innerHTML =
              data[len - 1].Windspeed + " Km/h";
            document.querySelector(".minimum").innerHTML =
              data[len - 1].Min_Temp + "°C";
            document.querySelector(".maximum").innerHTML =
              data[len - 1].Max_Temp + "°C";
            document.querySelector(".date").innerHTML =
              data[len - 1].date + ", " + data[len - 1].Day;
            document.querySelector(".city").innerHTML = data[len - 1].City_Name;

            console.log("Hello");

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
              document.querySelector(
                ".temperature-" + i
              ).style.fontWeight = 100;
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
            let cityname = document.getElementById("city").value;
            console.log(cityname);
            localStorage.setItem("weatherData", JSON.stringify(data));
            window.addEventListener("load", () => {
              if ("serviceWorker" in navigator) {
                navigator.serviceWorker.register("service-worker.js");
              }
            });
          });
      });
  });

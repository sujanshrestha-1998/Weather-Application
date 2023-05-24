<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="SujanShrestha_2329471.css" />
    <title>Document</title>
  </head>
  <body>
    <div class="search">
      <input
        id="myinput"
        type="text"
        placeholder="Enter city name"
        spellcheck="false"
      />
      <button id="mybtn" class="fa-solid fa-magnifying-glass"></button>
    </div>
    <div class="date"></div>
    <div class="Main">
      <div class="container">
        <!-- end.search -->
        <div class="error">
          <p>Invalid city name</p>
        </div>
        <!-- end.error -->
        <div class="weather">
          <h1 class="city">Wigan</h1>
          <div class="-weather">
            <img src="Images/cloudy.png" class="weather-img" />
            <p class="temp">14°C</p>
          </div>
          <!-- end.-weather -->
          <br />
          <div class="txt">
            <h2 class="descrip">overcast clouds</h2>
          </div>
          <!-- end.txt -->
        </div>
        <!-- end.weather -->
      </div>
      <!-- end.weather-details -->
      <div class="line"></div>
      <div class="weather-details">
        <div class="humidity">
          <i class="fa-solid fa-droplet"></i>
          <span class="-humidity">35%</span>
          <p>Humidity</p>
        </div>
        <!-- end.humidity -->
        <div class="wind">
          <i class="fa-solid fa-wind"></i>
          <span class="wind-speed">12km/H</span>
          <p>Wind Speed</p>
          <!-- end.wind -->
        </div>
        <div class="rain">
          <p class="ra">Rainfall</p>
          <p class="rainfall">0 mm/h</p>
        </div>
        <!-- end.rainfall -->
        <div class="min">
          <p>Min Temp</p>
          <span class="minimum">11.4°C</span>
        </div>
        <div class="max">
          <p>Max Temp</p>
          <span class="maximum">13.9°C</span>
        </div>
      </div>
    </div>
    
    <a href="api.php"><button class="History">History</button></a>
    

<script
      src="https://kit.fontawesome.com/10143ab47b.js"
      crossorigin="anonymous"></script>
      
  </body>
  
</html>



<?php
// create the connection
$servername = "sql312.epizy.com";
$username = "epiz_34242527";
$password = " QknoLNGWkp7lv ";
$dbname = "epiz_34242527_Demo";

// Create connection with the database
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection 
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
} else {
  echo "Database connected successfully";
}

// check if city is provided in the GET request
if (isset($_GET['city'])) {
  $city = $_GET['city'];

  // fetch data from API for the provided city
  $json_data = file_get_contents("https://api.openweathermap.org/data/2.5/weather?&units=metric&q=" . urlencode($city) . "&appid=ac7cdc20b49facdb25862d9fc16a501f");

  // convert the received data into JSON format
  $data = json_decode($json_data, true);

  // accessing the data 
  $city = $data['name'];
  $temp = $data['main']['temp'];
  $humidity = $data['main']['humidity'];
  $wind_speed = $data['wind']['speed'];
  $pressure = $data['main']['pressure'];
  $maindescrip = $data['weather'][0]['main'];
  $descrip = $data['weather'][0]['description'];
  $mintemp = $data['main']['temp_min'];
  $maxtemp = $data['main']['temp_max'];
  $timestamp = $data['dt'];
  $day = gmdate("l", $timestamp);
  $date = gmdate("Y-m-d", $timestamp);

  // query to insert data into the table
  $sql = "INSERT INTO Data (City_Name, Temperature, MainDescrip, Descrip, Day, Humidity, Windspeed, Min_Temp, Max_Temp,date)
          VALUES ('$city', '$temp', '$maindescrip', '$descrip', '$day', '$humidity', '$wind_speed', '$mintemp', '$maxtemp','$date')";

  // execute the query to insert data into the "Weather" table
  mysqli_query($conn, $sql);

  // display success message
  echo "Data for $city has been stored successfully.";
} else {
  // no city provided in the GET request
  echo "Please provide a city name.";
}

// close the database connection
$conn->close();

// Create a new connection to fetch and display data
$conn_select = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn_select->connect_error) {
  die("Connection failed: " . $conn_select->connect_error);
}

// select the query
$sql_select = "SELECT * FROM Data";

// execute the select query
$result = mysqli_query($conn_select, $sql_select);

// display the data in an HTML table
echo "<table border='1'>
        <tr>
            <th>ID</th>
            <th>City Name</th>
            <th>Temperature</th>
            <th>Main Description</th>
            <th>Description</th>
            <th>Day</th>
            <th>Humidity</th>
            <th>Wind Speed</th>
            <th>Min Temperature</th>
            <th>Max Temperature</th>
            <th>Date</th>
        </tr>";

while ($row = mysqli_fetch_array($result)) {
    echo "<tr>";
    echo "<td>" . $row['Id'] . "</td>";
    echo "<td>" . $row['City_Name'] . "</td>";
    echo "<td>" . $row['Temperature'] . "</td>";
    echo "<td>" . $row['MainDescrip'] . "</td>";
    echo "<td>" . $row['Descrip'] . "</td>";
    echo "<td>" . $row['Day'] . "</td>";
    echo "<td>" . $row['Humidity'] . "</td>";
    echo "<td>" . $row['Wind_Speed'] . "</td>";
    echo "<td>" . $row['Min_Temp'] . "</td>";
    echo "<td>" . $row['Max_Temp'] . "</td>";
    echo "<td>" . $row['date'] . "</td>";
    echo "</tr>";
}
echo "</table>";

// close the database connection
$conn_select->close();
?>
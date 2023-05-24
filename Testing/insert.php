<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="customize.css" />
  <title>Fetched</title>
</head>
<body>
  <div class="return">
    <br>
    <a href="main.html"><button><i class="fa-solid fa-house"></i>Home</button></a>
    
    <br>
    <br>
  </div>
  <script
      src="https://kit.fontawesome.com/10143ab47b.js"
      crossorigin="anonymous"
    ></script>
<?php
// create the connection
$servername = "sql106.epizy.com";
$username = "epiz_34205926";
$password = "8EEFoXSeOYOm";
$dbname = "epiz_34205926_db1";  

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}else{
  echo "Database connected successfully";
}


// fetch data from api 
$json_data = file_get_contents("https://api.openweathermap.org/data/2.5/weather?&units=metric&q=wigan&appid=ac7cdc20b49facdb25862d9fc16a501f");

// convert the received data into json format
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

echo "$date";
// echo $temp;
// query to insert data into the table according to the table in database
echo" ---------------------------------------------------------------------------------------------------------------------";
echo"Server Message: ";
$sql = "INSERT INTO Weather(Id,City_Name,Temperature,MainDescrip,Descrip,Day,Humidity,Wind_Speed,Min_Temp,Max_temp,date) 
       VALUES('1','$city','$temp','$maindescrip','$descrip','$day','$humidity','$wind_speed','$mintemp','$maxtemp','$date')";
echo "$sql";

// execute the query to insert data into the "Weather" table
mysqli_query($conn, $sql);

// select the query
$sql_select = "SELECT * FROM Weather";

// execute the select query
$result = mysqli_query($conn, $sql_select);

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
    echo "<td>" . $row['Min_temp'] . "</td>";
    echo "<td>" . $row['Max_temp'] . "</td>";
    echo "<td>" . $row['date'] . "</td>";
    echo "</tr>";
}
echo "</table>";

?>
</body>
</html>
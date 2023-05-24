<?php
// create the connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "Demo";

// Create connection with the database
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection 
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Get the city parameter from the query string
$city = $_GET['city'];

// Prepare the SQL query with the city parameter
$sql_select = "SELECT * FROM Data WHERE City_Name = '$city'";

// Execute the select query
$result = mysqli_query($conn, $sql_select);
  
// Declaring an empty array
$data = array();

// Loop through the results and add the data to the array
while ($row = mysqli_fetch_assoc($result)) {
  $data[] = $row;
}

// Processing the array into JSON
header('Content-Type: application/json');
echo json_encode($data);
?>

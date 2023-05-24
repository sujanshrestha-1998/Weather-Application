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
}

// select the query
$sql_select = "SELECT * FROM Weather";

// execute the select query
$result = mysqli_query($conn, $sql_select);

// create an empty array to store the data
$data = array();

// iterate over the results of the select query and add them to the $data array
while ($row = mysqli_fetch_assoc($result)) {
  $data[] = $row;
}

// return the $data array as JSON
header('Content-Type: application/json');
echo json_encode($data);
?>

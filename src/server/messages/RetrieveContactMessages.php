<?php

include_once("./Config.php");
// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

$data_Input = json_decode(file_get_contents("php://input"), true);

$myusername = mysqli_real_escape_string($conn, $data_Input['email']);

$password = mysqli_real_escape_string($conn, $data_Input['password']);

//echo 'Email: ' . $myusername.' Password:  '.$password. '<br>';

$sql = "SELECT * FROM contactmessages  WHERE DateContacted < NOW()";
$result = mysqli_query($conn, $sql);
$data = array();

while ($row = mysqli_fetch_array($result)) {
    $data[] = $row;
}
print json_encode($data);
$conn->close();

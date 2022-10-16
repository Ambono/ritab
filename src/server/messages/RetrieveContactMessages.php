<?php

include_once("../config/config.php");
header("Access-Control-Allow-Origin: *");

$data_Input = json_decode(file_get_contents("php://input"), true);

$myusername = mysqli_real_escape_string($conn, $data_Input['email']);

$password = mysqli_real_escape_string($conn, $data_Input['password']);

$sql = "SELECT * FROM contactmessages";
$result = mysqli_query($conn, $sql);
$data = array();

while ($row = mysqli_fetch_array($result)) {
    $data[] = $row;
}
print json_encode($data);
$conn->close();

<?php
include_once('./config.php');
//include_once("../config/config.php");
// Create connection
//$conn = mysqli_connect($servername, $username, $password, $dbname);

$data_Input = json_decode(file_get_contents("php://input"), true);



//echo 'Email: ' . $myusername.' Password:  '.$password. '<br>';

$sql = "SELECT * FROM contactmessages";
$result = mysqli_query($conn, $sql);
$data = array();

while ($row = mysqli_fetch_array($result)) {
    $data[] = $row;
}

if(isset($data)){
print json_encode($data);
}
$conn->close();

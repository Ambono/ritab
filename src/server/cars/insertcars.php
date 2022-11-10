<?php

include_once('./config.php');

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
$_SESSION['token_temp_user'] = session_id(); 

//header("Access-Control-Allow-Origin: *");
   
$data = json_decode(file_get_contents("php://input"), true);
print_r("<br> start printing data: ". $data.'<br>');


$name = mysqli_real_escape_string($conn, $data['name']);
$mileage = mysqli_real_escape_string($conn, $data['mileage']);
$year = mysqli_real_escape_string($conn, $data['year']);
$type = mysqli_real_escape_string($conn, $data['type']);
$make = mysqli_real_escape_string($conn, $data['make']);
$model = mysqli_real_escape_string($conn, $data['model']);
$price = mysqli_real_escape_string($conn, $data['price']);
$description = mysqli_real_escape_string($conn, $data['description']);
$status = mysqli_real_escape_string($conn, $data['status']);
$comment = mysqli_real_escape_string($conn, $data['comment']);
$forlderid = mysqli_real_escape_string($conn, $data['forlderid']);

$sql =  "INSERT INTO `autos`(`created_at`,`name`, `mileage`, `year`, `type`, `make`, `model`, `price`, `description`, `status`, `comment`, `forlderid`)
VALUES( NOW(), '$name', '$mileage', '$year', '$type', '$make', '$model', '[value-10]',  '$price', '$description', '$status', '$comment', '$forlderid')";

  $total = mysqli_num_rows($sql);

if($total==0)
  { 
       
 if (!mysqli_query($conn, $sql))
  {
  die("Error inserting vehicle in table record: ".mysqli_error()); 
  }  
else{
   echo "1 record added";
   print_r("<br> printing full name: ". $fullname.' '.$email.'<br>');
   } 

  }
//print json_encode($data);
$conn->close();
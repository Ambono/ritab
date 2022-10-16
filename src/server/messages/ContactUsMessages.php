<?php

/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Scripting/EmptyPHP.php to edit this template
 */

include_once("../config/config.php");


/*header("Access-Control-Allow-Origin: *");*/  


// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
$_SESSION['token_temp_user'] = session_id(); 

//header("Access-Control-Allow-Origin: *");
   
$data = json_decode(file_get_contents("php://input"), true);
print_r("<br> start printing data: ". $data.'<br>');

$fname = mysqli_real_escape_string($conn, $data['fname']);
$lname = mysqli_real_escape_string($conn, $data['lname']);
$email = mysqli_real_escape_string($conn, $data['email']);
$phone = mysqli_real_escape_string($conn, $data['number']);
$message = mysqli_real_escape_string($conn, $data['reason']);
$title = mysqli_real_escape_string($conn, $data['title']);

$fullname = $fname . ' ' . $lname;

$sql =  "INSERT INTO `contactmessages`(
    `numerodecommande`,
    `created_at`,
    `title`,
    `firstName`,
    `lastName`,
    `email`,
    `phoneNumber`,
    `yourmessage`,
    `response`,
    `readstatus`
)
VALUES(
    '[value-2]',
    NOW(), '$title', '$fname', '$lname', '$email', '$phone', '$message', '[value-10]', 1)";

  $total = mysqli_num_rows($sql);

if($total==0)
  {      
 if (!mysqli_query($conn, $sql))
  {
  die("Error inserting message in table record: ".mysqli_error()); 
  }  
else{
   echo "1 record added";      
   } 
  }
print_r("<br> printing full name: ". $fullname.' '.$email.'<br>');
//print json_encode($data);
$conn->close();
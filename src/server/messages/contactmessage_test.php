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
   
//$data = json_decode(file_get_contents("php://input"), true);
//print_r("<br> start printing data: ". $data.'<br>');



$sql="INSERT INTO `contactmessages`(`created_at`, `title`, `firstName`, `lastName`, `email`, `phoneNumber`, `yourmessage`, `response`, `readstatus`) "
        . "VALUES (NOW(),'[value-4]','[value-5]','[value-6]','[value-7]','[value-8]','[value-9]','[value-10]',1);";


       
 if (!mysqli_query($conn, $sql))
  {
  die("Error inserting message in table record: ".mysqli_error()); 
  }  
else{
   echo "1 record added"; 
   //print_r("<br> printing full name: ". $fullname.' '.$email.'<br>');
   } 

//print json_encode($data);
$conn->close();
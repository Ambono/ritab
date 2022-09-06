<?php
include_once("./Config.php");

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
$_SESSION['token_temp_user'] = session_id(); 

//header("Access-Control-Allow-Origin: *");
   
$data = json_decode(file_get_contents("php://input"), true);
print_r("<br> start printing data: ". $data.'<br>');

$fname = mysqli_real_escape_string($conn, $data['fname']);
$lname = mysqli_real_escape_string($conn, $data['lname']);
$email = mysqli_real_escape_string($conn, $data['email']);
$phone = mysqli_real_escape_string($conn, $data['teleph']);
$reason = mysqli_real_escape_string($conn, $data['reason']);

$fullname = $fname . ' ' . $lname;

$sql =  "INSERT INTO contactmessages( Name,Email, Phone, DateContacted, Reason) 
       VALUES ('$fullname','$email','$phone', now(), '$reason')";
       
 if (!mysqli_query($conn, $sql))
  {
  die("Error inserting message in table record: ".mysqli_error()); 
  }  
else{
   echo "1 record added";      
   } 

print_r("<br> printing full name: ". $fullname.' '.$email.'<br>');
//print json_encode($data);
$conn->close();
 



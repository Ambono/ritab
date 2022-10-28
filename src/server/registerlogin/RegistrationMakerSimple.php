<?php 
//include_once('../config/config.php');
include_once('./config.php');
// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
$_SESSION['token_temp_user'] = session_id();

// header("Access-Control-Allow-Origin: *");

$data = json_decode(file_get_contents("php://input"), true);
print_r("<br> start printing data: ". $data.'<br>');

 
 $uname = mysqli_real_escape_string($conn, $data['usname']);
 $fname = mysqli_real_escape_string($conn, $data['fname']); 
 $usurname = mysqli_real_escape_string($conn, $data['usurname']);
 $usurname = mysqli_real_escape_string($conn, $data['lname']);
 $email = mysqli_real_escape_string($conn, $data['email']);
 $upass = mysqli_real_escape_string($conn, $data['password']);
 $teleph = mysqli_real_escape_string($conn, $data['phonenumber']);
 $usertype = mysqli_real_escape_string($conn, $data['usertype']);  
 // password encrypt using SHA256();
 $password = hash('sha256', $upass);
 
 // check email exist or not
 
 $result = mysqli_query($conn, "SELECT email FROM users WHERE email='$email'");
 
 $count = mysqli_num_rows($result); // if email not found then proceed 
 
 if ($count==0) {
     
  $query = "INSERT INTO users(us_name, first_name, last_name, u_password, email, phone_number, created_at, country, city, occupation, secret_question, secret_answer, usertype) "
          . "VALUES('','$fname', '$usurname', '$password','$email', '$teleph', Now(), '',"
          . "'', '', '', '', '$usertype')";
  $res = mysqli_query($conn, $query);
  
  if ($res) {
   $errTyp = "success";
   $errMSG = "successfully registered, you may login now";   
  } else {
   $errTyp = "danger";
   $errMSG = "Something went wrong, try again later..."; 
  } 
   
 } else {
  $errTyp = "warning";
  $errMSG = "Sorry Email already in use ...";
 }

print json_encode($data);
$conn->close();
 


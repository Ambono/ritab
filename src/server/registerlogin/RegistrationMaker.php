<?php 
include_once('../config/config.php');
// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
$_SESSION['token_temp_user'] = session_id();

 
$data = json_decode(file_get_contents("php://input"), true);
print_r("<br> start printing data: ". $data.'<br>');

 
 $uname = mysqli_real_escape_string($conn, $data['usname']);
 $fname = mysqli_real_escape_string($conn, $data['fname']); 
 $usurname = mysqli_real_escape_string($conn, $data['usurname']);
 $email = mysqli_real_escape_string($conn, $data['email']);
 $upass = mysqli_real_escape_string($conn, $data['passw']);
 $teleph = mysqli_real_escape_string($conn, $data['teleph']); 
 $city = mysqli_real_escape_string($conn, $data['city']);
 $country = mysqli_real_escape_string($conn, $data['country']);
 $occupation = mysqli_real_escape_string($conn, $data['occupation']);
 $upasshint = mysqli_real_escape_string($conn, $data['passwhint']);
 $upasshintanswer= mysqli_real_escape_string($conn, $data['passwhintansw']);
 // password encrypt using SHA256();
 $password = hash('sha256', $upass);
 
 // check email exist or not 
 
 $result = mysqli_query($conn, "SELECT Email FROM users WHERE Email='$email'");
 
 $count = mysqli_num_rows($result); // if email not found then proceed 
 
 if ($count==0) {
     
  $query = "INSERT INTO users(UserName, FirstName, LastName, UPassword, Email, PhoneNumber, DateRegistered, Country, City, Occupation, SecretQuestion, SecretAnswer ) "
          . "VALUES('$uname','$fname', '$usurname', '$password','$email', ' $teleph', Now(), '$country',"
          . "'$city', '$occupation', '$upasshint', '$upasshintanswer')";
  $res = mysqli_query($conn, $query);
  
  if ($res) {
   $errTyp = "success";
   $errMSG = "successfully registered, you may login now";   
  } else {
   $errTyp = "danger";
   $errMSG = "Something went wrong, try again later..."; 
  } 
   
 } else if($count==1){    
     $query = "UPDATE users SET UserName ='$uname', "
             . "FirstName ='$fname', "
             . "LastName='$usurname',"
             . "UPassword ='$password', "
             . "PhoneNumber ='$teleph',"
             . "DateRegistered = Now(),"
             . "Country = '$country', "
             . "City ='$city', "
             . "Occupation='$occupation',"
             . "SecretQuestion ='$upasshint',"
             . "SecretAnswer ='$upasshintanswer'"
             . "WHERE Email='$email'";
   
  $res = mysqli_query($conn, $query);
   if ($res) {
   $errTyp = "success";
   $errMSG = "successfully updated your registration, you may login now";   
  } else {
   $errTyp = "danger";
   $errMSG = "Something went wrong, try again later..."; 
  } 
     
 }else{
  $errTyp = "warning";
  $errMSG = "Sorry Email already in use ...";
 }

print json_encode($data);
$conn->close();
 


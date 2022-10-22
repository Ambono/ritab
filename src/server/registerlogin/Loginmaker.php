<?php

include_once('../config/config.php');
// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

$data = json_decode(file_get_contents("php://input"), true);

$myemail = mysqli_real_escape_string($conn, $data['email']);

$upass = mysqli_real_escape_string($conn, $data['password']);
$password = hash('sha256', $upass);

//echo 'Email: ' . $myusername.' Password:  '.$password. '<br>';

$sql = "SELECT id FROM users WHERE email ='$myemail'  and u_password = '$password'";
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_array($result, MYSQLI_ASSOC);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
       $data = $row[0] ;
    //  echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
      echo "1";
    }
} else {
    echo "0";
}

$count = mysqli_num_rows($result);

//update site visits
function getUserIP() {
    $client = @$_SERVER['HTTP_CLIENT_IP'];
    $forward = @$_SERVER['HTTP_X_FORWARDED_FOR'];
    $remote = $_SERVER['REMOTE_ADDR'];

    if (filter_var($client, FILTER_VALIDATE_IP)) {
        $ip = $client;
    } elseif (filter_var($forward, FILTER_VALIDATE_IP)) {
        $ip = $forward;
    } else {
        $ip = $remote;
    }

    return $ip;
}

$user_ip = getUserIP();

// If result matched $myusername and $mypassword, table row must be 1 row

if ($count == 1) {  
    $queryvisitors = "insert into sitevisits(visitor_session, created_at, usertype, ips) values('$myemail', now(),'registered','$user_ip')";
    $result_sessions = mysqli_query($conn, $queryvisitors);
    if (!$result_sessions) {
        die;
    } 
    echo'1';  
}
else if ($count == 0){
    $queryvisitors = "insert into sitevisits(visitor_session, created_at, usertype, ips) values('$myemail', now(),'visitor','$user_ip')";
    $result_sessions = mysqli_query($conn, $queryvisitors);
    if (!$result_sessions) {
        die;
    }
}
//print json_encode($data);
$conn->close();


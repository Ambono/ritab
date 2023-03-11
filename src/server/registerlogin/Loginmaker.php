<?php

//include_once('../config/config.php');
include_once('./config.php');
// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

$data = json_decode(file_get_contents("php://input"), true);

$myemail = mysqli_real_escape_string($conn, $data['email']);

$upass = mysqli_real_escape_string($conn, $data['password']);
$password = hash('sha256', $upass);

// echo 'Email: ' . $myemail.' Password:  '.$password. '<br>';

//clean up


$sql = "SELECT id, usertype FROM users WHERE email ='$myemail'  AND u_password = '$password'";
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_assoc($result);

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

//printf($row["usertype"]);
//printf($count);
if ($count == 1) { 
    //clean up and delete previous logins
    printf($row["usertype"]);

    $Delete_login = "DELETE FROM loginmanager WHERE ips = '$user_ip' AND email = '$myemail' ";
    $deletelogin = mysqli_query($conn, $Delete_login );    
  
    $queryvisitors = "INSERT INTO sitevisits(visitor_session, created_at, usertype, ips) 
    VALUES('$myemail', now(),'registered','$user_ip')";
    $sessions_result = mysqli_query($conn, $queryvisitors);

    $queryloginmanager = "INSERT INTO loginmanager(loggedin_created_at, loginstatus, email, ips)
    VALUES( now(),'in','$myemail','$user_ip')";
    $login_result = mysqli_query($conn, $queryloginmanager);
   
    if (!$deletelogin) {
        die;
    } 

    if (!$sessions_result) {
        die;
    } 
    
    if (!$login_result) {
        die;
    } 

  
   mysqli_free_result($result);
   // echo "id: " . $row['id']. "<br>";
   
  
} //end count >0
else if ($count == 0){
    $queryvisitors = "INSERT INTO sitevisits(visitor_session, created_at, usertype, ips) VALUES('$myemail', now(),'visitor','$user_ip')";
    $result_sessions = mysqli_query($conn, $queryvisitors);
    if (!$result_sessions) {
        die;
    }
}
print json_encode($data);
$conn->close();


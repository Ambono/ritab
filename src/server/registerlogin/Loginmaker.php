<?php

include_once('../config/config.php');
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
$row = mysqli_fetch_array($result, MYSQLI_ASSOC);

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


if ($count == 1) { 

    //clean up
    $Delete_login = "DELETE FROM loginmanager WHERE ips = '$user_ip' AND visitor_session = '$myemail'  OR visitor_session = '' ";
    $deletelogin = mysqli_query($conn, $Delete_login );    
  
    $queryvisitors = "INSERT INTO sitevisits(visitor_session, created_at, usertype, ips) 
    VALUES('$myemail', now(),'registered','$user_ip')";
    $sessions_result = mysqli_query($conn, $queryvisitors);

    $queryloginmanager = "INSERT INTO loginmanager(visitor_session, loggedin_created_at, loginstatus, ips)
    VALUES('$myemail', now(),'in','$user_ip')";
    $login_result = mysqli_query($conn, $queryloginmanager);
   
    if (!$sessions_result) {
        die;
    } 
    
    if (!$login_result) {
        die;
    } 


    //echo "id: " . $row['id']. "<br>";
    
    if($row['usertype']=='A' )    
    echo'1';
    else if($row['usertype']=='T')
    echo'2';
    else if($row['usertype']=='T')
    echo'3';
    else
    echo'4';
  
} //end count >0
else if ($count == 0){
    $queryvisitors = "INSERT INTO sitevisits(visitor_session, created_at, usertype, ips) VALUES('$myemail', now(),'visitor','$user_ip')";
    $result_sessions = mysqli_query($conn, $queryvisitors);
    if (!$result_sessions) {
        die;
    }
}
//print json_encode($data);
$conn->close();


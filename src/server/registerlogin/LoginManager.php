<?php

include_once('../config/config.php');
// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

//echo 'Email: ' . $myusername.' Password:  '.$password. '<br>';

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

$sql = "SELECT ips,loggedin_created_at, loginstatus FROM loginmanager WHERE ips ='$user_ip' 
        AND DATE(loggedin_created_at) = CURDATE()";
$result = mysqli_query($conn, $sql);

$row = mysqli_fetch_array($result, MYSQLI_ASSOC);

$countip = mysqli_num_rows($result);

    if ($countip != 0) {     
        echo $row['loginstatus'];   
    }
    else{
        echo'out';
    }  

$conn->close();


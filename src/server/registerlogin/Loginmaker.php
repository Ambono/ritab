<?php

include("./Config.php");
// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

$data = json_decode(file_get_contents("php://input"), true);

$myemail = mysqli_real_escape_string($conn, $data['email']);

$password = mysqli_real_escape_string($conn, $data['password']);

//echo 'Email: ' . $myusername.' Password:  '.$password. '<br>';

$sql = "SELECT Id FROM users WHERE Email ='$myemail'  and Password = '$password'";
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_array($result, MYSQLI_ASSOC);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
       $data = $row[0] ;
   //   echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
    }
} else {
    echo "0 results";
}

$count = mysqli_num_rows($result);

// If result matched $myusername and $mypassword, table row must be 1 row


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
  
    $queryvisitors = "insert into sitevisits(Visitor_session, Date, Usertype, IPs) values('$myemail', now(),'registered','$user_ip')";
    $result_sessions = mysqli_query($conn, $queryvisitors);

    if (!$result_sessions) {
        die;
    } else {
       // echo' <br/> row inserted';
    }    
}
print json_encode($data);
$conn->close();


<?php 
include_once('./config.php');
  //include_once('../config/config.php');
  // Create connection
  $conn = mysqli_connect($servername, $username, $password, $dbname);


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

$query_deletesession_with_nul_email = "DELETE FROM   sitevisits WHERE visitor_session =''";
$result = mysqli_query($conn, $query_deletesession_with_nul_email);

$query_getvisitorsession = "SELECT  visitor_session FROM sitevisits WHERE DATE(created_at) = CURDATE() AND visitor_session IS NOT NULL  AND ips = '$user_ip' ORDER BY created_at DESC LIMIT 1";
$result = mysqli_query($conn, $query_getvisitorsession);

$row = mysqli_fetch_array($result, MYSQLI_ASSOC);

$count_session = mysqli_num_rows($result);

    if ($count_session != 0) { 
 $visitor_session =  $row['visitor_session']; 

 $query_deleteinloginmanager_with_nul_email = "DELETE FROM   loginmanager WHERE visitor_session =''";
 $result = mysqli_query($conn, $query_deleteinloginmanager_with_nul_email);

 $query_logoutmanagerupdate = "UPDATE loginmanager
   SET loggedout_created_at = now(),  loginstatus = 'out'
   WHERE  ips = '$user_ip'  AND  visitor_session = '$visitor_session' ORDER BY loggedin_created_at DESC LIMIT 1 ";

 $logout_result = mysqli_query($conn, $query_logoutmanagerupdate);
 
  if (!$logout_result) {
    echo'in';
      die;
  }
  else{
    echo'out';
  } 
}
?>
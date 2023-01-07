<?php 
include("./config.php");
// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);  

$data = json_decode(file_get_contents("php://input"), true);

$imageextension = mysqli_real_escape_string($conn, $data['imageextension']);

$result = mysqli_query($conn,"SELECT DISTINCT il.Name, il.PathMainImage, il.Useremail, il.PathFirstOptionalImage, 
il.PathSecondOptionalImage, il.PathThirdOptionalImage
FROM imagelocation il  
where il.PathMainImage like '%$imageextension%' ORDER BY Id DESC LIMIT 1");
     
$data = array();
while ($row = mysqli_fetch_array($result)) {
  $data[] = $row;  
}
print json_encode($data);
//$connect->close();
 


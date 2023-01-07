<?php 
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ritoab";
// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);  

$data = json_decode(file_get_contents("php://input"), true);



$result = mysqli_query($conn,"SELECT DISTINCT il.Id, il.Name, il.PathMainImage, il.Useremail, il.PathFirstOptionalImage, 
    il.PathSecondOptionalImage, il.PathThirdOptionalImage, pd.Sellernote, pd.Description, pd.Price
    FROM imagelocation il
     inner join productdetails pd on pd.SellerEmail = il.Useremail 
        where pd.Availuntil >= DATE_SUB(now(), INTERVAL 90 DAY) AND il.Name is not null GROUP BY il.Useremail ORDER BY il.Id DESC; ");
     
$data = array();
while ($row = mysqli_fetch_array($result)) {
  $data[] = $row;  
}
print json_encode($data);
//$connect->close();
 


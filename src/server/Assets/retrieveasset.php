<?php 
include("./config.php");
//include("./config_local.php");
// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);  

$data = json_decode(file_get_contents("php://input"), true);



$result = mysqli_query($conn,
    "SELECT DISTINCT il.Id, il.Name, il.PathMainImage, il.Useremail, il.PathFirstOptionalImage, 
     il.PathSecondOptionalImage, il.PathThirdOptionalImage, pd.Sellernote, pd.Description, pd.Price, pd.Shopname, vu.Videopath
     FROM productdetails pd 
     inner join imagelocation il on il.Useremail = pd.SellerEmail
     left join videouploads vu on  vu.Useremail = pd.SellerEmail 
        where pd.Availuntil >= DATE_SUB(now(), INTERVAL 90 DAY)
         AND il.Name is not null GROUP BY il.Useremail ORDER BY il.Id DESC;
          ");
     
$data = array();
while ($row = mysqli_fetch_array($result)) {
  $data[] = $row;  
}
print json_encode($data);
//$connect->close();
 


<?php


include_once('./config.php');

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);


//header("Access-Control-Allow-Origin: *");
   
$data = json_decode(file_get_contents("php://input"), true);
//print_r("<br> start printing data: ". $data.'<br>');



$string="";
$characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
            $string_init = '';
 $max = strlen($characters) - 1;
 $random_string_length = 22;
 for ($i = 0; $i < $random_string_length; $i++) {
      $string .= $characters[mt_rand(0, $max)];
 }

$randomID = $string;

$description = mysqli_real_escape_string($conn, $data['description']);
$itemName = mysqli_real_escape_string($conn, $data['itemName']);
$size = mysqli_real_escape_string($conn, $data['size']);
$colour = mysqli_real_escape_string($conn, $data['colour']);
$state = mysqli_real_escape_string($conn, $data['state']);
$category = mysqli_real_escape_string($conn, $data['category']);
$imagePath = mysqli_real_escape_string($conn, $data['myimage']);
$price = mysqli_real_escape_string($conn, $data['price']);
$deliveryPlace1 = mysqli_real_escape_string($conn, $data['country']);
$deliveryPlace2 = mysqli_real_escape_string($conn, $data['city']);
$deliveryPlace = $deliveryPlace1.' '.$deliveryPlace2;


$sql = "INSERT INTO `productdetails` (`Description`, `Name`, `Size`, `Colour`, `Gender`, `ProdCondition`, `ProdImage`, `CountryOrig`, `CountryDestin`, `CityDestin`, `ProdImagePath`, `Availfrom`, `Availuntil`, `productcategory`, `Price`, `FirstOptionalImage`, `SecondOptionalImage`, `Sellernote`, `SellerEmail`, `SellerPhone`, `Shopname`, `DeliveryPlace`, `InserterName`, `InsertionDate`, `randomUniqueID`) 
VALUES ('$description','$itemName','$size','$colour','value-6', '$state','value-8','value-9','value-10','value-11','$imagePath',Now(), Now(),'$category ','$price','value-17','value-18','value-19','value-20','value-21','value-22','$deliveryPlace','value-24',Now(),'$randomID')";
       
 if (!mysqli_query($conn, $sql))
  {
  die("Error inserting message in table record: "); 
  }  
else{
   echo "1 record added";   
   } 

  
//print json_encode($data);
$conn->close();
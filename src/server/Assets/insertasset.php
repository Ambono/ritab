 <?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ritoab";
// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);  

$data = json_decode(file_get_contents("php://input"), true);

 //print_r("<br> start printing data: ". $_FILES['image'].'<br>');
 // print_r("<br> start printing file: ". $_FILES[.'<br>');

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
 $sellerEmail = mysqli_real_escape_string($conn, $data['contactEmail']);
 $contactPhone = mysqli_real_escape_string($conn, $data['contactPhone']);
 //$upload_image = mysqli_real_escape_string($conn, $data['myimage']);
 $deliveryPlace1 = mysqli_real_escape_string($conn, $data['country']);
 $deliveryPlace2 = mysqli_real_escape_string($conn, $data['city']);
 $deliveryPlace = $deliveryPlace1.' '.$deliveryPlace2;
 
  $firstuploadimageoptional ="";
  $seconduploadimageoptional="";
  $newuploadimage="";
  
 
 $sql = "INSERT INTO `productdetails` (`Description`, `Name`, `Size`, `Colour`, `Gender`, `ProdCondition`, `ProdImage`, `CountryOrig`, `CountryDestin`, `CityDestin`, `ProdImagePath`, `Availfrom`, `Availuntil`, `productcategory`, `Price`, `FirstOptionalImage`, `SecondOptionalImage`, `Sellernote`, `SellerEmail`, `SellerPhone`, `Shopname`, `DeliveryPlace`, `InserterCode`, `InsertionDate`, `randomUniqueID`) 
  VALUES('$description','$itemName','$size','$colour','value-6', '$state','value-8','value-9','value-10','value-11','$newuploadimage',Now(),DATE_ADD(Now(), INTERVAL 3 MONTH),'$category ','value-16','value-17','value-18','value-19','$sellerEmail','$contactPhone','value-22','$deliveryPlace','$user_ip',Now(),'$randomID')"; 

//SET @latestinsertedid = LAST_INSERT_ID();
 
    //    }
       
 if (!mysqli_query($conn, $sql))
  {
  die("Error While uploading image on the server: "); 
  }  
else{
   echo "1 record added "; 
    $latestinsertedid = mysqli_insert_id($conn); 
  }
 
  
    
   
    
?>


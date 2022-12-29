
 <?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ritoab";
// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);  

$data = json_decode(file_get_contents("php://input"), true);

 if (isset($_FILES["myimage"]) && !empty($_FILES["myimage"])) {
 $upload_image=$_FILES["myimage"]["name"];
 $temp_name =$_FILES["myimage"]["tmp_name"];
 $folder="..images/"; 
 $item_currency ='£'; 

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
 
  $firstuploadimageoptional ="";
  $seconduploadimageoptional="";
  if (strpos($upload_image, '.jpg') !== false) {
     $newuploadimage =chop($upload_image,".jpg");
    } 
   if (strpos($upload_image, '.JPG') !== false) {
     $newuploadimage =chop($upload_image,".JPG");
    }  
    
    if (strpos($upload_image, '.tiff') !== false) {
     $newuploadimage =chop($upload_image,".tiff");
    }

    if (strpos($upload_image, '.png') !== false) {
     $newuploadimage =chop($upload_image,".png");
    }

    if (strpos($upload_image, '.JPEG') !== false) {
     $newuploadimage =chop($upload_image,".JPEG");
    }  
 
      if (strpos($upload_image, '.gif') !== false) {
     $newuploadimage =chop($upload_image,".gif");
    }
     
if( move_uploaded_file($temp_name, "../images/".$newuploadimage.".JPG"))
{ 
  if (isset($_FILES["firstoptionalimage"]) && !empty($_FILES["firstoptionalimage"])) {
   $upload_imageoptional1=$_FILES["firstoptionalimage"]["name"];
   $temp_namefirstoptional =$_FILES["firstoptionalimage"]["tmp_name"];
 
   if (strpos($upload_imageoptional1, '.jpg') !== false) {
     $firstuploadimageoptional = chop($upload_imageoptional1,".jpg");
    } 
   if (strpos($upload_imageoptional1, '.JPG') !== false) {
     $firstuploadimageoptional =chop($upload_imageoptional1,".JPG");
    }  
    
    if (strpos($upload_imageoptional1, '.tiff') !== false) {
     $firstuploadimageoptional =chop($upload_imageoptional1,".tiff");
    }

    if (strpos($upload_imageoptional1, '.png') !== false) {
     $firstuploadimageoptional =chop($upload_imageoptional1,".png");
    }

    if (strpos($upload_imageoptional1, '.JPEG') !== false) {
     $firstuploadimageoptional =chop($upload_imageoptional1,".JPEG");
    }  
 
      if (strpos($upload_imageoptional1, '.gif') !== false) {
     $firstuploadimageoptional =chop($upload_imageoptional1,".gif");
    }  	
    
     
   //////////optional2
     if (isset($_FILES["secondoptionalimage"]) && !empty($_FILES["secondoptionalimage"])) {
    
     $upload_imageoptional2=$_FILES["secondoptionalimage"]["name"];
     $temp_namesecondoptional =$_FILES["secondoptionalimage"]["tmp_name"];
 
     if (strpos($upload_imageoptional2, '.jpg') !== false) {
     $seconduploadimageoptional = chop($upload_imageoptional2,".jpg");
     } 
     if (strpos($upload_imageoptional2, '.JPG') !== false) {
     $seconduploadimageoptional =chop($upload_imageoptional2,".JPG");
     }  
    
     if (strpos($upload_imageoptional2, '.tiff') !== false) {
     $seconduploadimageoptional =chop($upload_imageoptional2,".tiff");
     }

     if (strpos($upload_imageoptional2, '.png') !== false) {
     $seconduploadimageoptional =chop($upload_imageoptional2,".png");
     }

     if (strpos($upload_imageoptional2, '.JPEG') !== false) {
     $seconduploadimageoptional =chop($upload_imageoptional2,".JPEG");
     }  
 
      if (strpos($upload_imageoptional2, '.gif') !== false) {
     $seconduploadimageoptional =chop($upload_imageoptional2,".gif");
    } 
  
    
 
  
//  $startDate = strtotime($_POST['datepickeravailfrom']);
//  $endDate = strtotime($_POST['datepickeravailto']);
 
//     if(($endDate - $startDate) < 0) {
//      $error = true;
//     } 
 
   // if(!  $error ){
    if( move_uploaded_file($temp_namefirstoptional, "../images/".$firstuploadimageoptional.".JPG")&& move_uploaded_file($temp_namesecondoptional, "../images/".$seconduploadimageoptional.".JPG"))  {
    
$sql = "INSERT INTO `productdetails` (`Description`, `Name`, `Size`, `Colour`, `Gender`, `ProdCondition`, `ProdImage`, `CountryOrig`, `CountryDestin`, `CityDestin`, `ProdImagePath`, `Availfrom`, `Availuntil`, `productcategory`, `Price`, `FirstOptionalImage`, `SecondOptionalImage`, `Sellernote`, `SellerEmail`, `SellerPhone`, `Shopname`, `DeliveryPlace`, `InserterName`, `InsertionDate`, `randomUniqueID`) 
VALUES('$description','$itemName','$size','$colour','value-6', '$state','value-8','value-9','value-10','value-11','$imagePath',Now(), DATE_ADD(Now(), INTERVAL 3 MONTH),'$category ','$price','$firstuploadimageoptional','$seconduploadimageoptional','value-19','value-20','value-21','value-22','$deliveryPlace','value-24',Now(),'$randomID')";
         
//SET @latestinsertedid = LAST_INSERT_ID();   

        
         }
    
	elseif( move_uploaded_file($temp_namefirstoptional, "../images/".$firstuploadimageoptional.".JPG"))
    { 


 $sql = "INSERT INTO `productdetails` (`Description`, `Name`, `Size`, `Colour`, `Gender`, `ProdCondition`, `ProdImage`, `CountryOrig`, `CountryDestin`, `CityDestin`, `ProdImagePath`, `Availfrom`, `Availuntil`, `productcategory`, `Price`, `FirstOptionalImage`, `SecondOptionalImage`, `Sellernote`, `SellerEmail`, `SellerPhone`, `Shopname`, `DeliveryPlace`, `InserterName`, `InsertionDate`, `randomUniqueID`) 
 VALUES('$description','$itemName','$size','$colour','value-6', '$state','value-8','value-9','value-10','value-11','$imagePath',Now(), DATE_ADD(Now(), INTERVAL 3 MONTH),'$category ','$price','$firstuploadimageoptional','value-18','value-19','value-20','value-21','value-22','$deliveryPlace','value-24',Now(),'$randomID')";
    
//SET @latestinsertedid = LAST_INSERT_ID();

  }elseif( move_uploaded_file($temp_namesecondoptional, "../images/".$seconduploadimageoptional.".JPG"))   {

 
 $sql = "INSERT INTO `productdetails` (`Description`, `Name`, `Size`, `Colour`, `Gender`, `ProdCondition`, `ProdImage`, `CountryOrig`, `CountryDestin`, `CityDestin`, `ProdImagePath`, `Availfrom`, `Availuntil`, `productcategory`, `Price`, `FirstOptionalImage`, `SecondOptionalImage`, `Sellernote`, `SellerEmail`, `SellerPhone`, `Shopname`, `DeliveryPlace`, `InserterName`, `InsertionDate`, `randomUniqueID`) 
  VALUES('$description','$itemName','$size','$colour','value-6', '$state','value-8','value-9','value-10','value-11','$imagePath',Now(), DATE_ADD(Now(), INTERVAL 3 MONTH),'$category ','$price','value-17','$seconduploadimageoptional','value-19','value-20','value-21','value-22','$deliveryPlace','value-24',Now(),'$randomID')";

//@latestinsertedid = LAST_INSERT_ID();    

// $sql = "INSERT INTO productdetails(Description, Name, Size, Colour, Gender, ProdCondition, ProdImage, ProdImagePath,Price, Availfrom, Availuntil, SecondOptionalImage, DeliveryPlace,InsertionDate, randomUniqueID)
// VALUES('$_POST[description]','$_POST[itemName]','$_POST[size]','$_POST[colour]' ,'$_POST[gender]' ,'$_POST[state]','$newuploadimage', '$folder', '$item_currency', '$_POST[datepickeravailfrom]','$_POST[datepickeravailto]','$seconduploadimageoptional','$deliveryPlace',InsertionDate, Now(),'$randomID')";

      
         } else {

 $sql = "INSERT INTO `productdetails` (`Description`, `Name`, `Size`, `Colour`, `Gender`, `ProdCondition`, `ProdImage`, `CountryOrig`, `CountryDestin`, `CityDestin`, `ProdImagePath`, `Availfrom`, `Availuntil`, `productcategory`, `Price`, `FirstOptionalImage`, `SecondOptionalImage`, `Sellernote`, `SellerEmail`, `SellerPhone`, `Shopname`, `DeliveryPlace`, `InserterName`, `InsertionDate`, `randomUniqueID`) 
  VALUES('$description','$itemName','$size','$colour','value-6', '$state','value-8','value-9','value-10','value-11','$imagePath',Now(), DATE_ADD(Now(), INTERVAL 3 MONTH),'$category ','$price','value-17','value-18','value-19','value-20','value-21','value-22','$deliveryPlace','value-24',Now(),'$randomID')"; 


// $sql = "INSERT INTO productdetails(Description, Name, Size, Colour, Gender, ProdCondition,ProdImage, ProdImagePath, Price, Availfrom, Availuntil, DeliveryPlace,  InsertionDate, randomUniqueID)
// VALUES('$_POST[description]','$_POST[itemName]','$_POST[size]','$_POST[colour]' ,'$_POST[gender]' ,'$_POST[state]', '$newuploadimage', '$folder', '$item_currency', '$_POST[datepickeravailfrom]','$_POST[datepickeravailto]','$deliveryPlace', Now(),'$randomID')"; 

//SET @latestinsertedid = LAST_INSERT_ID();
 
        }
       
 if (!mysqli_query($conn, $sql))
  {
  die("Error While uploading image on the server: ".mysql_error()); 
  }  
else{
   echo "1 record added "; 
    $latestinsertedid = mysqli_insert_id($conn); 
  }
 
 // }
    }
   }
  }
 }
?>



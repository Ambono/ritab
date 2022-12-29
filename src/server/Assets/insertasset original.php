 
 <?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ritoab";
// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);  
$con = mysqli_connect($servername, $username, $password, $dbname);  


//include("../config.php");

// $characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
//             $string_init = '';
//  $max = strlen($characters) - 1;
//  $random_string_length = 22;
//  for ($i = 0; $i < $random_string_length; $i++) {
//       $string .= $characters[mt_rand(0, $max)];
//  }

// $randomID = $string;
// if(!isset($_SESSION)){
//     session_start();
// }
// $_SESSION['token_temp_user'] = session_id();
//  if(isset($_SESSION['token_temp_user'])){  
//     $user =   $_SESSION['token_temp_user'];     
//  }
 
//  elseif(isset($_SESSION['login_user'])){
// 	    $user =$_SESSION['login_user']; 	
// 	   }

 if (isset($_FILES["myimage"]) && !empty($_FILES["myimage"])) {
 $upload_image=$_FILES["myimage"]["name"];
 $temp_name =$_FILES["myimage"]["tmp_name"];
 $folder="..images/";

 
 $item_currency ='£';

 $deliveryPlace = $_POST["country"].",".$_POST["city"];
 echo 'delivery place'.' '.$deliveryPlace;  
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
    
  
 $startDate = strtotime($_POST['datepickeravailfrom']);
 $endDate = strtotime($_POST['datepickeravailto']);
 
 if(($endDate - $startDate) < 0) {
     $error = true;
 } 
 
 if(!  $error ){
if( move_uploaded_file($temp_namefirstoptional, "../images/".$firstuploadimageoptional.".JPG")&& move_uploaded_file($temp_namesecondoptional, "../images/".$seconduploadimageoptional.".JPG"))  {
    
      	$sql = "INSERT INTO productdetails(Description, Name, Size, Colour, Gender,
 ProdCondition, ProdImage, ProdImagePath,Price, 
Availfrom, Availuntil, FirstOptionalImage, SecondOptionalImage, DeliveryPlace, InsertionDate, randomUniqueID)
  VALUES('$_POST[description]','$_POST[itemName]','$_POST[size]','$_POST[colour]' ,'$_POST[gender]' ,'$_POST[state]','$newuploadimage', '$folder', '$item_currency', '$_POST[datepickeravailfrom]','$_POST[datepickeravailto]','$firstuploadimageoptional','$seconduploadimageoptional','$deliveryPlace', Now(),'$randomID')"; 

//SET @latestinsertedid = LAST_INSERT_ID();   

        
         }
    
	elseif( move_uploaded_file($temp_namefirstoptional, "../images/".$firstuploadimageoptional.".JPG"))
    { 


 $sql = "INSERT INTO productdetails(Description, Name, Size, Colour, Gender, ProdCondition, ProdImage, ProdImagePath,Price, Availfrom, Availuntil, FirstOptionalImage, DeliveryPlace, InsertionDate,randomUniqueID)
  VALUES('$_POST[description]','$_POST[itemName]','$_POST[size]','$_POST[colour]' ,'$_POST[gender]' ,'$_POST[state]', '$newuploadimage', '$folder', '$item_currency', '$_POST[datepickeravailfrom]','$_POST[datepickeravailto]','$firstuploadimageoptional','$deliveryPlace', Now(),'$randomID')";    
      
//SET @latestinsertedid = LAST_INSERT_ID();



      }elseif( move_uploaded_file($temp_namesecondoptional, "../images/".$seconduploadimageoptional.".JPG"))   {

 
 $sql = "INSERT INTO productdetails(Description, Name, Size, Colour, Gender, ProdCondition, ProdImage, ProdImagePath,Price, Availfrom, Availuntil, SecondOptionalImage, DeliveryPlace,InsertionDate, randomUniqueID)
  VALUES('$_POST[description]','$_POST[itemName]','$_POST[size]','$_POST[colour]' ,'$_POST[gender]' ,'$_POST[state]','$newuploadimage', '$folder', '$item_currency', '$_POST[datepickeravailfrom]','$_POST[datepickeravailto]','$seconduploadimageoptional','$deliveryPlace',InsertionDate, Now(),'$randomID')";

//@latestinsertedid = LAST_INSERT_ID();    

      
         } else {

 $sql = "INSERT INTO productdetails(Description, Name, Size, Colour, Gender, ProdCondition,ProdImage, ProdImagePath, Price, Availfrom, Availuntil, DeliveryPlace,  InsertionDate, randomUniqueID)
  VALUES('$_POST[description]','$_POST[itemName]','$_POST[size]','$_POST[colour]' ,'$_POST[gender]' ,'$_POST[state]', '$newuploadimage', '$folder', '$item_currency', '$_POST[datepickeravailfrom]','$_POST[datepickeravailto]','$deliveryPlace', Now(),'$randomID')"; 

//SET @latestinsertedid = LAST_INSERT_ID();
 
        }
       
 if (!mysqli_query($con, $sql))
  {
  die("Error While uploading image on the server: ".mysql_error()); 
  }  
  else{
    echo "1 record added "; 
     $latestinsertedid = mysqli_insert_id($conn); 
  }
}
     }
    }
  }
}
  
  
?>



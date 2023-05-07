<?php
include("./config.php");
//include("./config_local.php");
// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);  

$data = json_decode(file_get_contents("php://input"), true);

$contactEmail = $_POST["contactEmail"];

//echo'contact email: '.$contactEmail;
//$videoFile = $_POST["videoFile"];
//echo 'email: '.$contactEmail;

// $sqlRandomId = "SELECT `SellerEmail`,  `randomUniqueID` FROM `productdetails` WHERE `SellerEmail` = \'modpleh@yahoo.co.uk\' ORDER BY Id LIMIT 1;";

$sqlRandomId = "SELECT `SellerEmail`,  `randomUniqueID`, `Name` FROM `productdetails` WHERE `SellerEmail` = '$contactEmail' ORDER BY 'Id' LIMIT 1;";


//SET @latestinsertedid = LAST_INSERT_ID();

  //    }
$result = mysqli_query($conn, $sqlRandomId);
     
if (!mysqli_query($conn, $sqlRandomId))
{
die("<br/>Error While getting inserter code "); 
}  
else{
 echo "1 record pulled from uploader mkdir for videos "; 
 $row = mysqli_fetch_assoc($result);
 $randomUniqueId = $row["randomUniqueID"];
 $userEmail =  $row["SellerEmail"];
 $name =  $row["Name"];
 echo "1 record pulled from uploader mkdir for videos ".$randomUniqueId .$userEmail; 
}

$nametrimed =  str_replace(' ', '', $name); 
$userextension = strtok($userEmail, '@'); 
$userextension1 =  str_replace('.', '', $userextension);
$directoryname = "videos/$userextension1";

if(!is_dir($directoryname)){
  mkdir($directoryname, 0755);
}

 //$folder = $directoryname;
 $folderPath =   $directoryname.'/'.$nametrimed; 

/////////////Checks///////////////////////

 $target_dir =  $folderPath;
 $target_file = $target_dir . basename($_FILES["videoFile"]["name"]);
 //$target_fileopt1 = $target_dir . basename($_FILES["firstoptionalimage"]["name"]);
//  $target_fileopt2 = $target_dir . basename($_FILES["secondoptionalimage"]["name"]);
 $uploadOk = 1;
 $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
 
//echo " before submit line 56"; 

// require_once('../getid3/getid3.php');
// $getID3 = new getID3;
// $filename = 'LiverpoolJudies.mp4';
// $ThisFileInfo = $getID3->analyze($filename);
// $getID3->CopyTagsToComments($ThisFileInfo);
// echo $ThisFileInfo['playtime_string'];

//  if(isset($_POST["submit"])) {
  // Check if image file is a actual image or fake image
  // $check = getimagesize($_FILES["videoFile"]["tmp_name"]);
 // echo " in submit line 60 and check is: ". $check ;

  //  $canupload = false;
  //  if($check !== false) {    
  //    $uploadOk = 1;
  //    echo " uploadOk: 1";
  //    $canupload = true;
  //  } else {    
  //    $uploadOk = 0;
  //    echo " uploadOk: 0";
  //  }

 
 
 // Check if file already exists
 if (file_exists($target_file)) {  
   $uploadOk = 0;
   echo " file already exist ";
 }
 
//  // Check file size
//  if ($_FILES["videoFile"]["size"] > 990000) {  
//    $uploadOk = 0;
//  }
 
 // Allow certain file formats
 
 if($imageFileType == "mp4") {   
   $uploadOk = 1;
 }
 else{
  echo " image file type: 0";
 }
 

 ///////////////Check ends ////////////////////


//if ($canupload) {
 // echo " in check uploads: ";
   ////////mainimage
 if (isset($_FILES["videoFile"]) && !empty($_FILES["videoFile"])) {
  $upload_image=$_FILES["videoFile"]["name"];
  $temp_name = $_FILES["videoFile"]["tmp_name"]; 

    // echo'new upload: '.$newuploadimage;
    $mainvideopath =  $folderPath.'.'.$upload_image.'video'.'.mp4';
  
      //////////upload main image   
    if( move_uploaded_file($temp_name, $mainvideopath))
    { 
    $sql = "INSERT INTO `videouploads`(    
        `Name`,
        `Videopath`,       
        `Date_created`,
        `UserEmail`
    )
    VALUES(       
        '$name',
        '$mainvideopath',      
         Now(),
        '$userEmail'
        )";      
          
    if (!mysqli_query($conn, $sql))
      {
      die("Error While uploading image on the server: default"); 
      }  
    else{  
      // $latestinsertedid = mysqli_insert_id($conn); 
      header("location: http://localhost:3000/#/thanksuploaded");
      // header("location: http://groupakwabatech.com/#/uploadedthanks");
      }
      
        }
      
        }
        else{
          echo'failed to get file info';
        }
//}
 //}
?>


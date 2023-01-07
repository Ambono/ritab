<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ritoab";
// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);  

$data = json_decode(file_get_contents("php://input"), true);



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

$contactEmail = $_POST["contactEmail"];
echo 'email: '.$contactEmail;

// $sqlRandomId = "SELECT `SellerEmail`,  `randomUniqueID` FROM `productdetails` WHERE `SellerEmail` = \'modpleh@yahoo.co.uk\' ORDER BY Id LIMIT 1;";

$sqlRandomId = "SELECT `SellerEmail`,  `randomUniqueID`, `Name` FROM `productdetails` WHERE `SellerEmail` = '$contactEmail' ORDER BY 'Id' LIMIT 1;";


//SET @latestinsertedid = LAST_INSERT_ID();

  //    }
     
if (!mysqli_query($conn, $sqlRandomId))
{
die("<br/>Error While getting inserter code "); 
}  
else{
 echo "1 record pulled "; 
 // $latestinsertedid = mysqli_insert_id($conn); 
}

$result = mysqli_query($conn, $sqlRandomId);
$row = mysqli_fetch_assoc($result);
$randomUniqueId = $row["randomUniqueID"];
$userEmail =  $row["SellerEmail"];
$name =  $row["Name"];


  $firstuploadimageoptional ="";
  $seconduploadimageoptional="";
  $thirduploadimageoptional="";
  $newuploadimage="";
  
  
  // //////////mandatory image
  // if (strpos($upload_image, '.jpg') !== false) {
  //    $newuploadimage =chop($upload_image,".jpg");
  //   } 
  //  if (strpos($upload_image, '.JPG') !== false) {
  //    $newuploadimage =chop($upload_image,".JPG");
  //   }  
    
  //   if (strpos($upload_image, '.tiff') !== false) {
  //    $newuploadimage =chop($upload_image,".tiff");
  //   }

  //   if (strpos($upload_image, '.png') !== false) {
  //    $newuploadimage =chop($upload_image,".png");
  //   }

  //   if (strpos($upload_image, '.jpeg') !== false) {
  //    // echo'upload image: '.$upload_image;
  //    $newuploadimage =chop($upload_image,".jpeg");
  //    $newuploadimage = substr($newuploadimage, strrpos($newuploadimage, '\\') + 1);
  //    $newuploadimage = $newuploadimage.'.JPG';
  //   }  

  //   if (strpos($upload_image, '.JPEG') !== false) {
  //    // echo'upload image: '.$upload_image;
  //     $newuploadimage =chop($upload_image,".JPEG");
  //     $newuploadimage = substr($newuploadimage, strrpos($newuploadimage, '\\') + 1);
  //     $newuploadimage = $newuploadimage.'.JPG';
  //   }  
 
  //   if (strpos($upload_image, '.gif') !== false) {
  //    $newuploadimage =chop($upload_image,".gif");
  //    $newuploadimage = substr($newuploadimage, strrpos($newuploadimage, '\\') + 1);
  //    $newuploadimage = $newuploadimage.'.JPG';
  //   }
$nametrimed =  str_replace(' ', '', $name); 
$userextension = strtok($userEmail, '@'); 
$userextension1 =  str_replace('.', '', $userextension);
$directoryname = "images/$userextension1";

if(!is_dir($directoryname)){
  mkdir($directoryname, 0755);
}

 //$folder = $directoryname;
 $folderPath =   $directoryname.'/'.$nametrimed; 

 // $folderPath =   $directoryname.'/'.$nametrimed.'/'.'main'; 

//  $file_tmp = $_FILES["mainimage"]["tmp_name"];
//  $file_name = $_FILES["mainimage"]["name"];
//  $file_ext = strtolower(end(explode('.',$_FILES["mainimage"]["name"])));
//  $filemain = $folderPath .'.'.$file_ext;


/////////////Checks///////////////////////

// if (!file_exists('uploads2/gfg.txt')) {
//   mkdir("uploads2/gfg.txt", 0777, true);
// }

  $target_dir =  $folderPath;
 $target_file = $target_dir . basename($_FILES["mainimage"]["name"]);
 //$target_fileopt1 = $target_dir . basename($_FILES["firstoptionalimage"]["name"]);
//  $target_fileopt2 = $target_dir . basename($_FILES["secondoptionalimage"]["name"]);
 $uploadOk = 1;
 $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
 
 // Check if image file is a actual image or fake image
 if(isset($_POST["submit"])) {
   $check = getimagesize($_FILES["mainimage"]["tmp_name"]);

   if(!empty($_FILES["firstoptionalimage"]["tmp_name"] )) 
   $check1 = getimagesize($_FILES["firstoptionalimage"]["tmp_name"]);

   if(!empty($_FILES["secondoptionalimage"]["tmp_name"])) 
   $check2 = getimagesize($_FILES["secondoptionalimage"]["tmp_name"]);

   if(!empty($_FILES["thirdoptionalimage"]["tmp_name"])) 
   $check3 = getimagesize($_FILES["thirdoptionalimage"]["tmp_name"]);
   
   if($check !== false) {
     echo "File -check- is an image - " . $check["mime"] . ".";
     $uploadOk = 1;
   } else {
     echo "File  -check- is not an image.";
     $uploadOk = 0;
   }

   if($check1 !== false) {
    echo "File  -check1- is an image - " . $check1["mime"] . ".";
    $uploadOk1 = 1;
  } else {
    echo "File  -check1- is not an image.";
    $uploadOk1 = 0;
  }

  if($check2 !== false) {
    echo "File  -check2- is an image - " . $check2["mime"] . ".";
    $uploadOk2 = 1;
  } else {
    echo "File  -check2- is not an image.";
    $uploadOk2 = 0;
  }

  if($check3 !== false) {
    echo "File  -check3- is an image - " . $check3["mime"] . ".";
    $uploadOk3 = 1;
  } else {
    echo "File  -check3- is not an image.";
    $uploadOk3 = 0;
  }
 }
 
 // Check if file already exists
 if (file_exists($target_file)) {
   echo "Sorry, file already exists.";
   $uploadOk = 0;
 }
 
 // Check file size
 if ($_FILES["mainimage"]["size"] > 500000) {
   echo "Sorry, your file is too large.";
   $uploadOk = 0;
 }

 if ($_FILES["firstoptionalimage"]["size"] > 500000) {
  echo "Sorry, your file is too large.";
  $uploadOk = 0;
}

if ($_FILES["secondoptionalimage"]["size"] > 500000) {
  echo "Sorry, your file is too large.";
  $uploadOk = 0;
}

if ($_FILES["thirdoptionalimage"]["size"] > 500000) {
  echo "Sorry, your file is too large.";
  $uploadOk = 0;
}
 
 // Allow certain file formats
 if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
 && $imageFileType != "gif" ) {
   echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
   $uploadOk = 0;
 }
 
 ///////////////Check ends ////////////////////


if ($uploadOk == 1) {
   ////////mainimage
 if (isset($_FILES["mainimage"]) && !empty($_FILES["mainimage"])) {
  $upload_image=$_FILES["mainimage"]["name"];
  $temp_name =$_FILES["mainimage"]["tmp_name"]; 


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
      
    // echo'new upload: '.$newuploadimage;

    $mainimagepath =  $folderPath.'.'.$newuploadimage.'main'.'.PNG';
  
  //////////upload main image   
 if( move_uploaded_file($temp_name, $mainimagepath))
 { 
  
  /////////////set up optional image 1  
  if (isset($_FILES["firstoptionalimage"]) && !empty($_FILES["firstoptionalimage"]) && ($uploadOk1 == 1)) {
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
    
    //echo'new 1st opt: '.$firstuploadimageoptional;

   //////////set up optional image 2
    if (isset($_FILES["secondoptionalimage"]) && !empty($_FILES["secondoptionalimage"]) && ($uploadOk2 == 1)) {
    
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

    if (isset($_FILES["thirdoptionalimage"]) && !empty($_FILES["thirdoptionalimage"]) && ($uploadOk3 == 1)) {
    
      $upload_imageoptional3=$_FILES["thirdoptionalimage"]["name"];
      $temp_namethirdoptional =$_FILES["thirdoptionalimage"]["tmp_name"];
  
      if (strpos($upload_imageoptional3, '.jpg') !== false) {
      $thirduploadimageoptional = chop($upload_imageoptional3,".jpg");
      } 
      if (strpos($upload_imageoptional3, '.JPG') !== false) {
      $thirduploadimageoptional =chop($upload_imageoptional3,".JPG");
      }  
     
      if (strpos($upload_imageoptional3, '.tiff') !== false) {
      $thirduploadimageoptional =chop($upload_imageoptional3,".tiff");
      }
 
      if (strpos($upload_imageoptional3, '.png') !== false) {
      $thirduploadimageoptional =chop($upload_imageoptional3,".png");
      }
 
      if (strpos($upload_imageoptional3, '.JPEG') !== false) {
      $thirduploadimageoptional =chop($upload_imageoptional3,".JPEG");
      }  
  
       if (strpos($upload_imageoptional3, '.gif') !== false) {
      $thirduploadimageoptional =chop($upload_imageoptional3,".gif");
     } 
 
   ///declare path for optional image1 and optional image 2
    $firstimageoptional = $folderPath.'.'.$firstuploadimageoptional.'opt1'.'.PNG';
    $secondimageoptional = $folderPath.'.'.$seconduploadimageoptional.'opt2'.'.PNG';
    $thirdimageoptional = $folderPath.'.'.$thirduploadimageoptional.'opt3'.'.PNG';

    if( move_uploaded_file($temp_namefirstoptional,  $firstimageoptional)&&
     move_uploaded_file($temp_namesecondoptional, $secondimageoptional) && move_uploaded_file($temp_namethirdoptional, $thirdimageoptional))
       {
    
      $sql123 = "INSERT INTO `imagelocation`(`Name`,`PathMainImage`, `Useremail`, `RandomId`, `PathFirstOptionalImage`, `PathSecondOptionalImage`, `PathThirdOptionalImage`,`Date_Created`)
       VALUES ('$name','$mainimagepath','$userEmail','$randomUniqueId','$firstimageoptional','$secondimageoptional','$thirdimageoptional',Now())";
        
        if (!mysqli_query($conn, $sql123))
           {
           die("Error While uploading image on the server: "); 
           }  
         else{
            echo "1 record added "; 
             $latestinsertedid = mysqli_insert_id($conn); 
             header("location: http://localhost:3000/#/thankuploadeded");
           }
                
      //SET @latestinsertedid = LAST_INSERT_ID();
        }

    /////// upload and save optional image 1 and optional image 2
    elseif( move_uploaded_file($temp_namefirstoptional,  $firstimageoptional)&& move_uploaded_file($temp_namesecondoptional, $secondimageoptional))  {
    
    $sql12 = "INSERT INTO `imagelocation`(`Name`,`PathMainImage`, `Useremail`, `RandomId`, `PathFirstOptionalImage`, `PathSecondOptionalImage`,`Date_Created`)
    VALUES ('$name','$mainimagepath','$userEmail','$randomUniqueId','$firstimageoptional','$secondimageoptional',Now())";
       
       if (!mysqli_query($conn, $sql12))
        {
        die("Error While uploading image on the server: "); 
        }  
      else{
         echo "1 record added "; 
          $latestinsertedid = mysqli_insert_id($conn); 
          header("location: http://localhost:3000/#/thankuploadeded");
        }
          
//SET @latestinsertedid = LAST_INSERT_ID();
  }
   

 ////upload and save optional image 1
	elseif( move_uploaded_file($temp_namefirstoptional, $firstimageoptional))
    { 
      $sql1 = "INSERT INTO `imagelocation`(`Name`,`PathMainImage`, `Useremail`, `RandomId`, `PathFirstOptionalImage`)
       VALUES ('$name','$mainimagepath','$userEmail','$randomUniqueId','$firstimageoptional')";
        
//SET @latestinsertedid = LAST_INSERT_ID();
////end optional 1
if (!mysqli_query($conn, $sql1))
  {
  die("Error While uploading image on the server: "); 
  }  
else{
   echo "1 record added "; 
    $latestinsertedid = mysqli_insert_id($conn); 
    header("location: http://localhost:3000/#/thankuploadeded");
  }
   

 ////upload and save optional image 2
  }elseif( move_uploaded_file($temp_namesecondoptional, $secondimageoptional))
  {
    $sql2 = "INSERT INTO `imagelocation`(`Name`,`PathMainImage`, `Useremail`, `RandomId`, `PathSecondOptionalImage`,`Date_Created`) 
    VALUES ('$name','$mainimagepath','$userEmail','$randomUniqueId','$secondimageoptional', Now())";
     if (!mysqli_query($conn, $sql2))
     {
     die("Error While uploading image on the server: "); 
     }  
   else{
      echo "1 record added "; 
       $latestinsertedid = mysqli_insert_id($conn); 
       header("location: http://localhost:3000/#/thankuploadeded");
     }
         
//@latestinsertedid = LAST_INSERT_ID();    

/////// save Main image
  } elseif( move_uploaded_file($temp_namethirdoptional, $thirdimageoptional))
  {
    $sql3 = "INSERT INTO `imagelocation`(`Name`,`PathMainImage`, `Useremail`, `RandomId`, `PathThirdOptionalImage`,`Date_Created`) 
    VALUES ('$name','$mainimagepath','$userEmail','$randomUniqueId','$thirdimageoptional', Now())";
   
   

   if (!mysqli_query($conn, $sql3))
  {
  die("Error While uploading image on the server: "); 
  }  
else{
   echo "1 record added "; 
    $latestinsertedid = mysqli_insert_id($conn); 
    header("location: http://localhost:3000/#/thankuploadeded");
  }
   
//@latestinsertedid = LAST_INSERT_ID();    

/////// save Main image
  } else {
    // $sql = "INSERT INTO `imagelocation`( `Name`,`PathMainImage`, `Useremail`, `RandomId`) 
    // VALUES ('$name', '$mainimagepath','$userEmail','$randomUniqueId')";
      
    if(empty($upload_imageoptional1))     
    $firstimageoptional ="images/noimage/noimage.PNG";

    if(empty($upload_imageoptional2))
     $secondimageoptional ="images/noimage/noimage.PNG";

     if(empty($upload_imageoptional3))
     $thirdimageoptional ="images/noimage/noimage.PNG";

    $sql = "INSERT INTO `imagelocation`(`Name`,`PathMainImage`, `Useremail`, `RandomId`, `PathFirstOptionalImage`, `PathSecondOptionalImage`,`PathThirdOptionalImage`,`Date_Created`)
    VALUES ('$name','$mainimagepath','$userEmail','$randomUniqueId','$firstimageoptional','$secondimageoptional','$thirdimageoptional', Now())";
          

//SET @latestinsertedid = LAST_INSERT_ID();
 
    //    }
       
 if (!mysqli_query($conn, $sql))
  {
  die("Error While uploading image on the server: "); 
  }  
else{
   echo "1 record added "; 
    $latestinsertedid = mysqli_insert_id($conn); 
    header("location: http://localhost:3000/#/thankuploadeded");
  }
   
    }
  
    }
    else{
      echo'failed to get file info';
    }
  }
}
 }
}
}

?>


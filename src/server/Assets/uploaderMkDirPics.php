<?php
include("./config.php");
//include("./config_local.php");
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
//echo 'email: '.$contactEmail;

// $sqlRandomId = "SELECT `SellerEmail`,  `randomUniqueID` FROM `productdetails` WHERE `SellerEmail` = \'modpleh@yahoo.co.uk\' ORDER BY Id LIMIT 1;";

$sqlRandomId = "SELECT `SellerEmail`,  `randomUniqueID`, `Name` FROM `productdetails` WHERE `SellerEmail` = '$contactEmail' ORDER BY 'Id' LIMIT 1;";


//SET @latestinsertedid = LAST_INSERT_ID();

  //    }
     
if (!mysqli_query($conn, $sqlRandomId))
{
  echo 'contact email: '.$contactEmail;
die("<br/>Error While getting inserter code "); 
}  
else{
 echo "1 record pulled from uploader mkdir for picture and text upload "; 
 // $latestinsertedid = mysqli_insert_id($conn); 
}

$result = mysqli_query($conn, $sqlRandomId);
$row = mysqli_fetch_assoc($result);
$randomUniqueId = $row["randomUniqueID"];
$userEmail =  $row["SellerEmail"];
$name =  $row["Name"];
echo "rui: ".$randomUniqueId;
echo " userEmail: ".$userEmail;
echo " name: ".$name;

  $firstuploadimageoptional ="";
  $seconduploadimageoptional="";
  $thirduploadimageoptional="";
  $newuploadimage="";
  
$nametrimed =  str_replace(' ', '', $name); 
$userextension = strtok($userEmail, '@'); 
$userextension1 =  str_replace('.', '', $userextension);
$directoryname = "images/$userextension1";

if(!is_dir($directoryname)){
  mkdir($directoryname, 0755);
}

 //$folder = $directoryname;
 $folderPath =   $directoryname.'/'.$nametrimed; 

/////////////Checks///////////////////////

// if (!file_exists('uploads2/gfg.txt')) {
//   mkdir("uploads2/gfg.txt", 0777, true);
// }

 $target_dir =  $folderPath;
 $target_file = $target_dir . basename($_FILES["mainimage"]["name"]);
 //$target_fileopt1 = $target_dir . basename($_FILES["firstoptionalimage"]["name"]);
//  $target_fileopt2 = $target_dir . basename($_FILES["secondoptionalimage"]["name"]);
 $uploadOk = 1;
 $check = false;
 $check1 = false;
 $check2 = false;
 $check3 = false;

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

   $canupload = false;
   
   if($check !== false) {    
     $uploadOk = 1;
     echo " uploadOk: 1";
     $canupload = true;
   } else {    
     $uploadOk = 0;
     echo " uploadOk: 0";
   }

   if($check1 !== false) {   
    $uploadOk1 = 1;
  } else {    
    $uploadOk1 = 0;
  }

  if($check2 !== false) {    
    $uploadOk2 = 1;
  } else {   
    $uploadOk2 = 0;
  }

  if($check3 !== false) {   
    $uploadOk3 = 1;
  } else {    
    $uploadOk3 = 0;
  }
 }
 
 // Check if file already exists
 if (file_exists($target_file)) {  
   $uploadOk = 0;
   echo " file already exist ";
 }
 
 // Check file size
 if ($_FILES["mainimage"]["size"] > 500000) {  
   $uploadOk = 0;
 }

 if ($_FILES["firstoptionalimage"]["size"] > 500000) { 
  $uploadOk = 0;
}

if ($_FILES["secondoptionalimage"]["size"] > 500000) { 
  $uploadOk = 0;
}

if ($_FILES["thirdoptionalimage"]["size"] > 500000) {
  $uploadOk = 0;
}
 
 // Allow certain file formats
 
 if($imageFileType == "jpg" || $imageFileType == "png" || $imageFileType == "jpeg"
 || $imageFileType == "gif" || $imageFileType =="webp") {   
   $uploadOk = 1;
 }
 else{
  echo " image file type: 0";
 }
 
 ///////////////Check ends ////////////////////


if (!empty($canupload)) 
{
      ////////mainimage
    if (isset($_FILES["mainimage"]) && !empty($_FILES["mainimage"])) 
      {
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
          if (isset($_FILES["firstoptionalimage"])
           && !empty($_FILES["firstoptionalimage"]) && ($uploadOk1 == 1)) 
          {
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
                  //echo'on line 245 ';
                  //////////set up optional image 2
                  if (isset($_FILES["secondoptionalimage"])
                    && !empty($_FILES["secondoptionalimage"])
                    && ($uploadOk2 == 1))
                  {
                  
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

                        if (isset($_FILES["thirdoptionalimage"]) 
                        && !empty($_FILES["thirdoptionalimage"])
                        && ($uploadOk3 == 1)) 
                        {
                      
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

                        if( move_uploaded_file($temp_namefirstoptional,  $firstimageoptional)
                        &&move_uploaded_file($temp_namesecondoptional, $secondimageoptional)
                        && move_uploaded_file($temp_namethirdoptional, $thirdimageoptional))
                          {
                          
                                $sql123 = "INSERT INTO `imagelocation`(`Name`,`PathMainImage`, `Useremail`, `RandomId`, `PathFirstOptionalImage`, `PathSecondOptionalImage`, `PathThirdOptionalImage`,`Date_Created`)
                                VALUES ('$name','$mainimagepath','$userEmail','$randomUniqueId','$firstimageoptional','$secondimageoptional','$thirdimageoptional',Now())";
                              
                                if (!mysqli_query($conn, $sql123))
                                {
                                die("Error While uploading image on the server 3 images: "); 
                                }  
                                else{           
                                  // $latestinsertedid = mysqli_insert_id($conn); 
                                // echo'header location part 1';
                                // $latestinsertedid = mysqli_insert_id($conn); 
                                // header("location: http://localhost:3000/#/thanksuploaded");
                                // header("location: http://groupakwabatech.com/#/thanksuploaded");
                                 header("location: http://localhost:3000/#/uploadvideos");
                                // header("location: http://groupakwabatech.com/#/uploadvideos");
                                }
                                      
                                //SET @latestinsertedid = LAST_INSERT_ID();
                      } ///end move uplod first, second, and third image

                      /////// upload and save optional image 1 and optional image 2
                      elseif( move_uploaded_file($temp_namefirstoptional,  $firstimageoptional)
                      && move_uploaded_file($temp_namesecondoptional, $secondimageoptional)) 
                      {    
                        $sql12 = "INSERT INTO `imagelocation`(`Name`,`PathMainImage`, `Useremail`, `RandomId`, `PathFirstOptionalImage`, `PathSecondOptionalImage`,`Date_Created`)
                        VALUES ('$name','$mainimagepath','$userEmail','$randomUniqueId','$firstimageoptional','$secondimageoptional',Now())";
                        
                        if (!mysqli_query($conn, $sql12))
                          {
                          die("Error While uploading image on the server 2 images: "); 
                          }  
                        else{     
                          echo'header location part 2';   
                        // $latestinsertedid = mysqli_insert_id($conn); 
                        // header("location: http://localhost:3000/#/thanksuploaded");
                        //header("location: http://groupakwabatech.com/#/thanksuploaded");
                         header("location: http://localhost:3000/#/uploadvideos");
                      //  header("location: http://groupakwabatech.com/#/uploadvideos");
                          }
                            
                        //SET @latestinsertedid = LAST_INSERT_ID();
                      }  ///end move uload first and second image
                      ////upload and save optional image 1
                      elseif( move_uploaded_file($temp_namefirstoptional, $firstimageoptional))
                      { 
                          $sql1 = "INSERT INTO `imagelocation`(`Name`,`PathMainImage`, `Useremail`, `RandomId`, `PathFirstOptionalImage`)
                        VALUES ('$name','$mainimagepath','$userEmail','$randomUniqueId','$firstimageoptional')";
                          
                          //SET @latestinsertedid = LAST_INSERT_ID();
                          ////end optional 1
                        if (!mysqli_query($conn, $sql1))
                        {
                          die("Error While uploading image on the server 1 image: "); 
                        }  
                        else{  
                        echo'header location part 3';
                        // $latestinsertedid = mysqli_insert_id($conn); 
                        // header("location: http://localhost:3000/#/thanksuploaded");
                        // header("location: http://groupakwabatech.com/#/thanksuploaded");
                         header("location: http://localhost:3000/#/uploadvideos");
                         // header("location: http://groupakwabatech.com/#/uploadvideos");
                        }
                          
                      }  ///end move upload optional image 1 alone
                     
                      }/// end issset third image only
                      
                      // else
                      // {                              
                              /////// upload and save optional image 1 and optional image 2
                              if( move_uploaded_file($temp_namefirstoptional,  $firstimageoptional)
                              && move_uploaded_file($temp_namesecondoptional, $secondimageoptional)) 
                              {    
                                $sql12 = "INSERT INTO `imagelocation`(`Name`,`PathMainImage`, `Useremail`, `RandomId`, `PathFirstOptionalImage`, `PathSecondOptionalImage`,`Date_Created`)
                                VALUES ('$name','$mainimagepath','$userEmail','$randomUniqueId','$firstimageoptional','$secondimageoptional',Now())";
                                
                                if (!mysqli_query($conn, $sql12))
                                  {
                                  die("Error While uploading image on the server 2 images: "); 
                                  }  
                                else{     
                                  echo'header location part 2';   
                                // $latestinsertedid = mysqli_insert_id($conn); 
                                // header("location: http://localhost:3000/#/thanksuploaded");
                                //header("location: http://groupakwabatech.com/#/thanksuploaded");
                                 header("location: http://localhost:3000/#/uploadvideos");
                               // header("location: http://groupakwabatech.com/#/uploadvideos");
                                  }
                                    
                                //SET @latestinsertedid = LAST_INSERT_ID();
                              }  ///end move uload first and second image
                              ////upload and save optional image 1
                              elseif( move_uploaded_file($temp_namefirstoptional, $firstimageoptional))
                              { 
                                  $sql1 = "INSERT INTO `imagelocation`(`Name`,`PathMainImage`, `Useremail`, `RandomId`, `PathFirstOptionalImage`)
                                VALUES ('$name','$mainimagepath','$userEmail','$randomUniqueId','$firstimageoptional')";
                                  
                                  //SET @latestinsertedid = LAST_INSERT_ID();
                                  ////end optional 1
                                if (!mysqli_query($conn, $sql1))
                                {
                                  die("Error While uploading image on the server 1 image: "); 
                                }  
                                else{  
                                echo'header location part 3';
                                // $latestinsertedid = mysqli_insert_id($conn); 
                                // header("location: http://localhost:3000/#/thanksuploaded");
                                // header("location: http://groupakwabatech.com/#/thanksuploaded");
                                 header("location: http://localhost:3000/#/uploadvideos");
                                 // header("location: http://groupakwabatech.com/#/uploadvideos");
                                }
                              }
                    // } //end set optional image 2
                  }//end set optional image 2
                  else
                  {
                    if(empty($upload_imageoptional2))
                    $secondimageoptional ="images/noimage/noimage.PNG";
        
                    if(empty($upload_imageoptional3))
                    $thirdimageoptional ="images/noimage/noimage.PNG";
        
                    $sqlMainOnly = "INSERT INTO `imagelocation`(`Name`,`PathMainImage`, `Useremail`, `RandomId`, `PathFirstOptionalImage`, `PathSecondOptionalImage`,`PathThirdOptionalImage`,`Date_Created`)
                    VALUES ('$name','$mainimagepath','$userEmail','$randomUniqueId','$firstimageoptional','$secondimageoptional','$thirdimageoptional', Now())";
                  
        
                    if (!mysqli_query($conn, $sqlMainOnly))
                      {
                      die("Error While uploading main image only on the server only third image: "); 
                      }  
                    else{  
                      echo'header location part 6'; 
                      // $latestinsertedid = mysqli_insert_id($conn); 
                      // header("location: http://localhost:3000/#/thanksuploaded");
                      // header("location: http://groupakwabatech.com/#/thanksuploaded");
                      header("location: http://localhost:3000/#/uploadvideos");
                      //header("location: http://groupakwabatech.com/#/uploadvideos");
                      }
                  } //end if else second image protocol

                  if( move_uploaded_file($temp_namefirstoptional, $firstimageoptional))
                  { 
                    if(empty($upload_imageoptional2))
                    $secondimageoptional ="images/noimage/noimage.PNG";
        
                    if(empty($upload_imageoptional3))
                    $thirdimageoptional ="images/noimage/noimage.PNG";

                      $sql1 = "INSERT INTO `imagelocation`(`Name`,`PathMainImage`, `Useremail`, `RandomId`, `PathFirstOptionalImage`)
                    VALUES ('$name','$mainimagepath','$userEmail','$randomUniqueId','$firstimageoptional')";
                      
                      //SET @latestinsertedid = LAST_INSERT_ID();
                      ////end optional 1
                    if (!mysqli_query($conn, $sql1))
                    {
                      die("Error While uploading image on the server 1 image: "); 
                    }  
                    else{  
                    echo'header location part 3';
                    // $latestinsertedid = mysqli_insert_id($conn); 
                    // header("location: http://localhost:3000/#/thanksuploaded");
                    // header("location: http://groupakwabatech.com/#/thanksuploaded");
                     header("location: http://localhost:3000/#/uploadvideos");
                     // header("location: http://groupakwabatech.com/#/uploadvideos");
                    }
                  }
            } ///end set up optional image 1 protocol 
             else            
            {
              if(empty($upload_imageoptional1))     
              $firstimageoptional ="images/noimage/noimage.PNG";
  
              if(empty($upload_imageoptional2))
              $secondimageoptional ="images/noimage/noimage.PNG";
  
              if(empty($upload_imageoptional3))
              $thirdimageoptional ="images/noimage/noimage.PNG";
  
              $sqlMainOnly = "INSERT INTO `imagelocation`(`Name`,`PathMainImage`, `Useremail`, `RandomId`, `PathFirstOptionalImage`, `PathSecondOptionalImage`,`PathThirdOptionalImage`,`Date_Created`)
              VALUES ('$name','$mainimagepath','$userEmail','$randomUniqueId','$firstimageoptional','$secondimageoptional','$thirdimageoptional', Now())";
            
  
              if (!mysqli_query($conn, $sqlMainOnly))
                {
                die("Error While uploading main image only on the server only third image: "); 
                }  
              else{  
                echo'header location part 6'; 
                // $latestinsertedid = mysqli_insert_id($conn); 
                // header("location: http://localhost:3000/#/thanksuploaded");
                // header("location: http://groupakwabatech.com/#/thanksuploaded");
                header("location: http://localhost:3000/#/uploadvideos");
                //header("location: http://groupakwabatech.com/#/uploadvideos");
                }
            }
             
        } //end move upload main image protocol 
            
    } //end  isset mainimage protocol
     else
    {
      echo " main image was not found"; 
    }   
} ///end if can upload protocol 
  else
{ 
  //else can upload
  echo " did not jump in can upload/uploadOk: 0";    
} //end else can upload
?>


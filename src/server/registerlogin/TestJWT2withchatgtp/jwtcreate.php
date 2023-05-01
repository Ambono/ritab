<?php
//require '/Applications/XAMPP/xamppfiles/htdocs/htdocdev/ritab/vendor/autoload.php';

//vendor/autoload.php
//require '/Applications/XAMPP/xamppfiles/htdocs/htdocdev/ritab/src/vendor/autoload.php';
include '../vendor/autoload.php';
use \Firebase\JWT\JWT;

$payload2 = array(
    "user_id" => 123,
    "username" => "john.doe"
);

$payload =array(
    'iss'=>'localhost',
    'aud'=>'localhost',
    'exp'=>time()+10000,
    'data'=>[
        "user_id" => 123,
        "username" => "john.doe"
        ]    
    );

$secret_key = "secretkey1";

$jwt = JWT::encode($payload, $secret_key, 'HS256');

header('Content-type: application/json');
echo json_encode(array('token' => $jwt));
///Applications/XAMPP/xamppfiles/htdocs/htdocdev/ritab/vendor

///Applications/XAMPP/xamppfiles/htdocs/htdocdev/ritab/src/server/registerlogin/TestJWT2withchatgtp/jwtcreate.php
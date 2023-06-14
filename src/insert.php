<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
header("Access-control-Allow-Origin: *");
header("Access-control-Allow-Headers: access");
header("Access-control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-control-Allow-Headers: Content-Type,
Access-control-Allow-Headers, Authorization, X-Requested-With");

$data = json_decode(file_get_contents("php://input"));
$first_name = $data->first_name;
$email = $data->email;
$password = $data->password;

$con = mysqli_connect("localhost:3306", "root", "");
mysqli_select_db($con, "bateau");

if($first_name && $email && $password){
$sql = "insert into client(
first_name,
email,
password
)
values(
'$first_name',
'$email',
'$password'
)";
$result = mysqli_query($con,$sql);
if($result){
$response['data']=array(
'status'=>'valid'
);
echo json_encode($response);
}
else{
$response['data']=array(
'status'=>'invalid'
);
echo json_encode($response);
}
}
?>

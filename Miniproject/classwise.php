<?php
session_start();
$json_array[]="";

$con=mysqli_connect("localhost","root","","discussion");
$year=$_SESSION['year'];
$department= $_SESSION['branch'];
$section=$_SESSION['section'];
$q1="SELECT * FROM `$year` WHERE `branch` = '$department' AND `section` = '$section'";
$res=mysqli_query($con,$q1);
if(!$res){
	echo "failed";
}
else{
$rows=mysqli_num_rows($res);
$i=0;
while($row=mysqli_fetch_assoc($res))
{
	$json_array[$i]["sender"]=$row['sender'];
	$json_array[$i]["message"]=$row['data'];
	$json_array[$i]["date"]=$row['date'];
	$i++;
}
$json_array["rows"]=$i;
	
echo json_encode($json_array);

}
?>
<?php
$a='1';$b='1';$c='1';$d=1;
$e='1';$f='1';$g='1';$h=1;$i=1;
$mydb = new mysqli("182.254.128.242","root","ABCabc123!","zjtie_web_api","5630");
$sql = "INSERT INTO Class_Apply(College,Class_Id,Major,Class_Suggest,Student_Name,Student_Tel,Student_Qq,Student_Qqqun,Student_Id) VALUES ('$a','$b','$c','$d','$e','$f','$g','$h','$i')";
if ($mydb->query($sql) == TRUE) {
echo "user entry saved successfully.";
} else {
echo "INSERT attempt failed" ;
}
	$mydb->close();
?>

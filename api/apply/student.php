<?php
header("Content-type: text/html; charset=utf-8");
$a=$_GET['a'];$b=$_GET['b'];$c=$_GET['c'];$d=$_GET['d'];$e=$_GET['e'];$f=$_GET['f'];
if(empty($a) || empty($b) || empty($c) || empty($d) || empty($e) || empty($f)){
	$arr = array ('state'=>'error');
}else{
	$con = mysql_connect("599b8f0bd4c33.sh.cdb.myqcloud.com:5630","root","ABCabc123!");
    mysql_select_db("zjtie_web_api", $con);
    mysql_query("set names 'utf8'");
    mysql_query("INSERT INTO Student_Apply(department_area,department_name,zjtie_name,zjtie_student_id,zjtie_college,zjtie_tel,zjtie_qq,zjtie_personal) VALUES ('$a','$b','$c','$d','$e','$f')");
    mysql_close($con);
	$arr = array ('state'=>'ok');
}
	echo json_encode($arr);		
?>

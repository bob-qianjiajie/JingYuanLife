<?php
header("Content-type: text/html; charset=utf-8");
$a=$_GET['a'];$b=$_GET['b'];$c=$_GET['c'];$d=$_GET['d'];
$e=$_GET['e'];$f=$_GET['f'];$g=$_GET['g'];
if(empty($a) || empty($b) || empty($c) || empty($d) || empty($e) || empty($f) || empty($g)){
	$arr = array ('state'=>'error');
}else{
	$con = mysql_connect("599b8f0bd4c33.sh.cdb.myqcloud.com:5630","root","ABCabc123!");
    mysql_select_db("zjtie_web_api", $con);
    mysql_query("set names 'utf8'");
    mysql_query("INSERT INTO Department_Apply(department_area,department_name,department_suggest,department_contacts_name,department_contacts_tel,department_contacts_qq,department_contacts_qqqun) VALUES ('$a','$b','$c','$d','$e','$f','$g')");
    mysql_close($con);
	$arr = array ('state'=>'ok');
}
	echo json_encode($arr);		
?>

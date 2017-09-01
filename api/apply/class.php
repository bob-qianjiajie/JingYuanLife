<?php
$db_host = '182.254.128.242:5630';
$db_name = 'zjtie_web_api';
$db_user = 'root';
$db_pwd = 'ABCabc123!';


// 假定数据库用户名：root，密码：123456，数据库：RUNOOB 
$con=mysqli_connect("182.254.128.242","root","ABCabc123!","zjtie_web_api"，"5630"); 
if (mysqli_connect_errno($con)) 
{ 
    echo "连接 MySQL 失败: " . mysqli_connect_error(); 
} 
 
// 执行查询
//mysqli_query($con,"SELECT * FROM websites");
//mysqli_query($con,"INSERT INTO websites (name, url, alexa, country)VALUES ('百度','https://www.baidu.com/','4','CN')");
 
mysqli_close($con);
echo "连接 MySQL 失败: ";
?>
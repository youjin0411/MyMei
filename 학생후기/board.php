<?php
//$conn = mysqli_connect("localhost", "root", "990327", "itshow"); //mysql과 연결함
//$conn = mysqli_connect("localhost", "root", "abcdef", "itshowdb", 3308); //mysql과 연결함

//include('./dbconn_test.php');
include('./dbconn_test.php');

if(!$conn){  //연결하지 못하였을때 에러메세지 띠우기, mysqli_connect_error()는 에러메시지를 띠우는 함수
  echo 'db에 연결하지 못했습니다' .mysqli_connect_error(); 
} 
else{
  echo '<script>alert("등록되었습니다"); 
  location.href="../학생후기/index.php";</script>';
}

$_title=$_POST['title'];

$_name=$_POST['uname'];

$_school=$_POST['uschool'];

$_content=$_POST['ucontent'];

//insert 쿼리문 틀렸었어요 value X values O
$query="INSERT INTO board(title, name, school, content) VALUES('$_title','$_name','$_school','$_content')";
mysqli_query($conn, $query); // 찾아보기
?>
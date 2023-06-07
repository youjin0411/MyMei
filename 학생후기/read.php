<?php
//include('./dbconn_test.php');
include('./dbconn.php');

$column = $_GET['column'];
$idx = $_GET['a']; // idx 변수에 get 메소드를 사용하여 매개변수 a의 값을 가져옵니다.
$query = "SELECT * FROM board WHERE $column='$idx'";
$result = mysqli_query($conn, $query);
$re = mysqli_fetch_array($result); // 결과를 가져옵니다.
?>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css">
  <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
      integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
      crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link rel="stylesheet" href="../학생후기/css/style.css">
  <link rel="stylesheet" href="../학생후기/css/editwrite.css">
  <link rel="stylesheet" href="../학생후기/css/student.css">
  <link rel="stylesheet" href="../학생후기/css/read.css">
  <script src="https://use.fontawesome.com/releases/v5.2.0/js/all.js"> </script>
    <title>
        <?php
        echo $re['title'];
        ?>
    </title>
</head>

<body>


<header class="header" id="header">
    <nav class="nav container" id="nav-toggle">
        <div class="nav-toggle" id="nav-toggle">
            <i class='bx bx-menu'></i>
        </div>

        <!--네비게이션 바-->
        <div class="nav-menu">
            <ul class="nav-list" id="nav-list">
                <li class="nav-item" onClick="location.href='../index.html'">
                    <a href="../index.html" class="nav-link">&ensp; HOME &ensp;</a></li>
                <li class="nav-item" onClick="location.href='../소개/introduce.html'">
                    <a href="../소개/introduce.html" class="nav-link">&ensp; 소개 &ensp;</a></li>
                <li class="nav-item" onClick="location.href='../마이스터고/areaMeister.html'">
                    <a href="../마이스터고/areaMeister.html" class="nav-link">&ensp; 마이스터고 &ensp;</a></li>
                <li class="nav-item" onClick="location.href='../대학/university.html'">
                    <a href="../대학/university.html" class="nav-link">&ensp; 대학 &ensp;</a></li>
                <li class="nav-item" onClick="location.href='../학생후기/student.php'">
                    <a href="../학생후기/student.php" class="nav-link">&ensp; 학생후기 &ensp;</a></li>
            </ul>
        </div>
    </nav>
</header>

<div class="board_img">
    <img class="board_main_img" src="../image/mirimschool.png">
    <h1 class="img_main_text" sytle="top:80%" >재학생 이야기</h1>
    <p class="img_sub_text">재학중인 학생들의 생생한 이야기를 들어보세요!</p>
</div>

<table class="board_view">
    <tr>
        <td class = line>
        <?php
        echo "<h1> {$re['title']} </h1>";
        ?>
        </td>
    </tr>
    <tr>
        <td style="text-align : right">
            <?php
            echo $re['name']. "<pre></pre>";
            echo  $re['school'] ;
            ?>
        </td>
    </tr>
    <tr>
        <td class = content_border style="background-color:rgb(237, 237, 237); border : 1px solid black;">
                <?php
                echo " {$re['content']}"
                ?>
        </td>
    </tr>
</table>

<script>
    window.addEventListener("DOMContentLoaded", funcion(){
        var table_view = document.querySelector('.border_view');
        var table = table_view.querySelector('table');
        table_view.style.height = table.offsetHeight + 'px';
    })
</script>
</body>
</html>

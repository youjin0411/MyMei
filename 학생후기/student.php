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
    <link rel="stylesheet" href="../학생후기/css/student.css">
    <link rel="stylesheet" href="../학생후기/css/read.css">
    <script src="https://use.fontawesome.com/releases/v5.2.0/js/all.js"> </script>
    <script src="https://kit.fontawesome.com/def66b134a.js" crossorigin="anonymous"></script>

    <title>학생후기</title>

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
                <li class="nav-item" onClick="location.href='../마이스터고/areaMeister.html'">
                    <a href="../마이스터고/areaMeister.html" class="nav-link">&ensp; 마이스터고 &ensp;</a></li>
                <li class="nav-item" onClick="location.href='../대학/university.html'">
                    <a href="../대학/university.html" class="nav-link">&ensp; 대학 &ensp;</a></li>
                <li class="nav-item" onClick="location.href='./student.php'">
                    <a href="./student.php" class="nav-link">&ensp; 학생후기 &ensp;</a></li>
                <li class="nav-item" onClick="location.href='../마이스터고사/test.html'">
                    <a href="../마이스터고사/test.html" class="nav-link">&ensp; 마이스터고사 &ensp;</a></li>
            </ul>
        </div>
    </nav>
    </header>

<div class="board_img">
    <div class="board_main_img"><!--src="../image/mirimschool.png"-->
        <h1 class="img_main_text">재학생 이야기</h1>
        <p class="img_sub_text">재학중인 학생들의 생생한 이야기를 들어보세요!</p>
    </div>
</div>


<div class="board_top">
    <form method="post" action="search.php">
        <div class="board_search">
            <input type = "text" placeholder="Search" name="search">
            <button type="submit" class="btn_search" name="btn_search" onclick="location.href='../학생후기/search.php'">
            <i class="fa-solid fa-magnifying-glass"></i>
            </button>
        </div>
    </form>
    <button type="button" class="btn_write" onclick="location.href='../학생후기/editwrite.html'">글쓰기</button>
</div>

<div class="border_header">
    <hr class="hr_header">
    <table class = "table_header" >
        <tr height="50">
            <th width="200">NO</th>
            <th width ="800">제목</th>
            <th width="300">작성자</th>
            <th width="300">학교명</th>
        </tr>
        <?php
        include('./dbconn_test.php');
        // include('./dbconn.php');

        $list_num = 5; // 한 페이지에 표시할 항목 수
        $page_num = 4; // 한 블럭 당 페이지 수

        // isset 메소드를 통하여 page에 값이 있으면 page를 넘겨주고, 없거나 null이면 1을 넘겨줍니다.
        $page = isset($_GET["page"]) ? $_GET["page"] : 1;
    
        $query = "SELECT COUNT(*) AS total_rows FROM board"; // 행의 개수를 세는 COUNT(), AS 변수 : COUNT한 값이 변수에 들어감
        $result = mysqli_query($conn, $query);
        $row = mysqli_fetch_assoc($result); // 배열로 사용
        $num = $row['total_rows'];
    
        // 전체 페이지 수 = 전체 데이터 / 페이지당 데이터의 개수에서 올림
        $total_page = ceil($num / $list_num);
    
        // 전체 블럭 번호
        $total_block = ceil($total_page / $page_num);
    
        // 현재 블럭 번호
        $now_block = ceil($page / $page_num);
    
        // 블럭 당 시작 페이지 번호
        $s_pageNum = ($now_block - 1) * $page_num + 1;
    
        // 데이터가 0개인 경우
        if ($s_pageNum <= 0) {
            $page_num = 1;
        }
    
        // 블럭 당 마지막 페이지 번호
        $e_pageNum = $now_block * $page_num;
    
        // 마지막 번호가 전체 페이지 수를 넘지 않도록
        if ($e_pageNum > $total_page) {
            $e_pageNum = $total_page;
        }

        $start = ($page - 1) * $list_num; //2페이지 인경우, 2-1*5 = 5
        $sql = "SELECT * FROM board ORDER BY num DESC LIMIT $start, $list_num"; //5부터 5까지 
        $result = mysqli_query($conn, $sql);
        $cnt = $start + 1;
        while($array = mysqli_fetch_array($result)){
        ?>
        <tr>
        <td><a href='read.php?a=<?php echo $array["num"]; ?>&column=num'><?php echo $array["num"]; ?></a>&nbsp;</td>
            <td><a href='read.php?a=<?php echo $array["title"]; ?>&column=title'><?php echo $array["title"]; ?></a>&nbsp;</td>
            <td><a href='read.php?a=<?php echo $array["name"]; ?>&column=name'><?php echo $array["name"]; ?></a>&nbsp;</td>
            <td><a href='read.php?a=<?php echo $array["school"]; ?>&column=school'><?php echo $array["school"]; ?></a>&nbsp;</td>
        </tr>
        <?php
        $cnt++;
        }

        //mysqli_close($conn);

        echo "<div class='page'";
        echo "<ul style='list-style-type: none; list-style:none; text-align: center;'>";

        // ...

        echo "</ul>";
        echo "</div>";

        //mysqli_close($conn);
        ?>

    </table>
    <?php
    echo "<div class='page'";
    echo "<ul style='list-style-type: none; list-style:none; text-align: center; display: flex; justify-content: center;'>";

    if ($s_pageNum > 1) {
        $prev_block = $s_pageNum - 1;
        echo "<li><a href='?page=$prev_block' style='color: black;  margin-right : 20px;'>◀ 이전</a></li>";
    }

    // 페이지 번호 출력
    for ($i = $s_pageNum; $i <= $e_pageNum; $i++) {
        echo "<li style='margin-right: 10px;'";
        if ($i == $page) {
            echo " class='active'";
        }
        echo "><a href='?page=$i' style='color: " . ($i == $page ? "black" : "gray") . ";'>$i</a></li>";
    }

    // 다음 블럭으로 이동하는 링크
    if ($e_pageNum < $total_page) {
        $next_block = $e_pageNum + 1;
        echo "<li><a href='?page=$next_block' style='color: black;'>다음 ▶</a></li>";
    }

    echo "</ul>";
    echo "</div>";

    mysqli_close($conn);
    ?>

</div>

<div class="box-bottom" style="height : 200px">
</div>
<footer class="footer ">
        <div class="grid-container-footer margin ">
            <div class="grid-item-footer ">my mei</div>
            <div class="grid-item-footer "></div>
            <div class="grid-item-footer ">my meister school</div>
            <div class="grid-item-footer ">팩스</div>
            <div class="grid-item-footer ">마이스터고 설명</div>
            <div class="grid-item-footer ">이메일</div>
            <div class="grid-item-footer ">마이스터고 학교</div>
            <div class="grid-item-footer ">미림여자정보과학고</div>
        </div>
        <div class="grid-container-footer ">
            <div class="grid-item-footer "></div>
            <div class="grid-item-footer "></div>
            <div class="grid-item-footer "></div>
            <div class="grid-item-footer "></div>
            <div class="grid-item-footer "></div>
            <div class="grid-item-footer "></div>
            <div class="grid-item-footer ">개인정보 처리 방침</div>
            <div class="grid-item-footer ">이용약관</div>
        </div>
    </footer>

</body>

<script src="../학생후기/js/main.js"></script>
<script src="../학생후기/js/edit.js"></script>
</html>
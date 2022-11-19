// show/hide menu: toggle(on/off반복) menu
const toggleMenu = (toggleId, navListId) => {
    //html -> js 가져옴
    const toggle = document.getElementById(toggleId); 
    const navList = document.getElementById(navListId); 
    const toggleIcon = toggle.getElementsByTagName("i")[0];
    
    if(toggle && navList) {
        // toggle click 
        toggle.addEventListener('click', () => {
            // show/hide menu : .show-menu -> 함수를 한 번만 사용함으로
            navList.classList.toggle('show-menu');
            //change toggle icon : bx-menu <-> bx-x 
            toggleIcon.classList.toggle("bx-menu");
            toggleIcon.classList.toggle("bxs-x-square");
        });
    }
}
toggleMenu("nav-toggle", "nav-list");

// 선택 시 색상 변경 
const nonClick = document.querySelector(".chk1"); 
const nonClick2 = document.querySelector(".chk2");
nonClick.onclick = function(){
    nonClick.style.color = '#20819F';
    nonClick2.style.color = '#595959';
}

nonClick2.onclick = function(){
    nonClick2.style.color = '#20819F';
    nonClick.style.color = '#595959';
}

$('.part-5 .grid-item').click(function() {
    // 클릭된 당사자 => this
    // 이 함수를 실행한 주어 => this
    // $(this) => 이거 포장해주세요.
    // 굳이 포장을 하는 이유
    var $클릭된_녀석 = $(this);
    
    var $part5 = $클릭된_녀석.closest('.part-5');
    //var $part5 = $클릭된_녀석.parent().parent().parent(); // $part5를 얻는 또 다른 방법
    // 오직 $part5 안에서만 .body 로 검색해서 나온 것들 포장해주세요.
    var $body = $part5.find('.body');
    
    // 기존에 active 가진 녀석에게 active 빼앗기
    $클릭된_녀석.parent().find('.active').removeClass('active');
    $클릭된_녀석.addClass('active');
    
    // 클릭된 녀석이 형제 중에서 몇 번째 인지 확인(참고로 0부터 셉니다.);
    var index = $클릭된_녀석.index();
    
    // part-5 라는 클래스를 가진 나의 조상중에 나랑 가장 가까운 1개를 포장해주세요.
    
    // 기존의 active 된 요소들에서 active 제거
    $body.find('.active').removeClass('active');
    
    $body.find('div:nth-child(' + (index + 1) + ')').addClass('active');
});


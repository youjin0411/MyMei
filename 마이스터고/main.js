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


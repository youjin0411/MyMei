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
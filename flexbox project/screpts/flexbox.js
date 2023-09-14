let menu = document.querySelector(".nav_header_links")
let menuBtn = document.querySelector(".menu__icon")
let menuBtnIcon = document.querySelector(".menu__icon i")

menuBtn.addEventListener("click",function (){
    if (menuBtnIcon.classList.contains("fa-bars")){
        menu.style.left = "0"
        menuBtnIcon.classList = "fa fa-times"
    } else {
        menu.style.left = "-256px"
        menuBtnIcon.classList = "fa fa-bars"
    }
})
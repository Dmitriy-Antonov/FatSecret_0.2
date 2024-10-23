"use strict"

let menu_active = false;

function show_menu() {
    let menu_li = document.getElementById('menu-li');

    if (menu_active == false) {
        menu_li.style.left = "-460px";
        menu_li.style.opacity = "100";
        menu_active = true;
    } else {
        menu_li.style.left = "30px";
        menu_li.style.opacity = "0";
        menu_active = false;
    }
}
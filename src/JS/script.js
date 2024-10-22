"use strict"

// let menu_active = false;

// const show_menu = (action) => {
//     menu = document.getElementById('menu');

//     if (menu_active | action == "close"){
//         menu.style.left = "-600px";
//         menu_active = false;
//     }
//     else{
//         menu.style.left = "0px";
//         menu_active = true;
//     }
// }

let menu_active = false;

const show_menu = () => {
    let menu_li = document.getElementById('menu-li');

    if (menu_active == false) {
        menu_li.style.left = "-500px";
        menu_li.style.opacity = "100";
        menu_active = true;
    } else {
        menu_li.style.left = "30px";
        menu_li.style.opacity = "0";
        menu_active = false;
    }
}
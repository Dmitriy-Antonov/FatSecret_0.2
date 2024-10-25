"use strict"

let menu_active = false;

function show_menu() {
    let menu_li = document.getElementById('menu-li');

    if (innerWidth >= 1100) {
        if (menu_active == false) {
            menu_li.style.left = "-220px";
            menu_li.style.opacity = "100";
            menu_active = true;
        } else {
            menu_li.style.left = "30px";
            menu_li.style.opacity = "0";
            menu_active = false;
        }
    } else if (innerWidth >= 990) {
        if (menu_active == false) {
            menu_li.style.left = "-410px";
            menu_li.style.opacity = "100";
            menu_active = true;
        } else {
            menu_li.style.left = "30px";
            menu_li.style.opacity = "0";
            menu_active = false;
        }
    } else if (innerWidth >= 990) {
        if (menu_active == false) {
            menu_li.style.left = "-410px";
            menu_li.style.opacity = "100";
            menu_active = true;
        } else {
            menu_li.style.left = "30px";
            menu_li.style.opacity = "0";
            menu_active = false;
        }
    }
}

function calorie_calculation () {
    
    let age = +document.getElementById('ages').value;
    let weight = +document.getElementById('weight').value;
    let height = +document.getElementById('height').value;
    let activity_ratio = +document.getElementById('activity-ratio').value;
    let result1 = 0;
    
    if (document.getElementById('male-gender').checked == true) {
        result1 = (10 * weight + 6.25 * height - 5 * age - 161) * activity_ratio;
    } else if (document.getElementById('female-gender').checked == true){
        result1 = (10 * weight + 6.25 * height - 5 * age + 5) * activity_ratio;
    } else {
        alert("Выберите пол!")
    }

    if (document.getElementById('weight-gain').checked == true) {
        result1 += result1 * 0.2;
    } else if (document.getElementById('slow-weight-gain').checked == true) {
        result1 += result1 * 0.1;
    } else if (document.getElementById('maintaining-weight').checked == true) {
        result1 = result1;
    } else if (document.getElementById('slow-weight-loss').checked == true) {
        result1 -= result1 * 0.1; 
    } else if (document.getElementById('weight-loss').checked == true) {
        result1 -= result1 * 0.2;
    } else {
        alert ("Вы не указали Вашу цель!");
    }

    alert(result1);
}
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

let result = 0;

let proteins = 0;
let fats = 0;
let carbohydrates = 0;



function calorie_calculation () {
    
    let age = +document.getElementById('ages').value;
    let weight = +document.getElementById('weight').value;
    let height = +document.getElementById('height').value;
    let activity_ratio = +document.getElementById('activity-ratio').value;
    
    if (document.getElementById('male-gender').checked == true) {
        result = (10 * weight + 6.25 * height - 5 * age - 161) * activity_ratio;
    } else if (document.getElementById('female-gender').checked == true){
        result = (10 * weight + 6.25 * height - 5 * age + 5) * activity_ratio;
    } else {
        alert("Выберите пол!")
    }

    if (document.getElementById('weight-gain').checked == true) {
        result += result * 0.2;
    } else if (document.getElementById('slow-weight-gain').checked == true) {
        result += result * 0.1;
    } else if (document.getElementById('maintaining-weight').checked == true) {
        result = result;
    } else if (document.getElementById('slow-weight-loss').checked == true) {
        result -= result * 0.1; 
    } else if (document.getElementById('weight-loss').checked == true) {
        result -= result * 0.2;
    } else {
        alert ("Вы не указали Вашу цель!");
    }

    alert(result);

    let breakfastCalories = parseInt(result * 0.325);
    let lunchCalories = parseInt(result * 0.40);
    let dinnerCalories = parseInt(result * 0.275);
    sumOfCalories.textContent = `Калориев: 1200/${breakfastCalories}`;


}

function show_content(type, day, intake, arrownum) {
    let arrow = document.getElementById(arrownum);
    let days = document.getElementById(day);
    let intakes = document.getElementById(intake);

    if (type == 'day') {
        if (arrow.style.transform != "rotate(180deg)") {
            arrow.style.transform = "rotate(180deg)";
        } else {
            arrow.style.transform = "rotate(0deg)";
        }

        if (days.hidden == true) {
            days.hidden = false;
            days.style.transition = "0.2s";
        } else {
            days.hidden = true;
        }
    } else {
        if (arrow.style.transform != "rotate(180deg)") {
            arrow.style.transform = "rotate(180deg)";
        } else {
            arrow.style.transform = "rotate(0deg)";
        }

        if (intakes.style.display != 'flex') {
            intakes.style.display = 'flex';
            intakes.style.marginBottom = '30px';
        } else {
            intakes.style.display = 'none';
        }
    }
}

let kaloriesOfIntake = 0;

function total_kalories(id, nutritional) {
    let grams = document.getElementById(id).value;

    return kaloriesOfIntake = grams * nutritional;
}

let sumOfCalories = document.getElementById('sumOfCalories');

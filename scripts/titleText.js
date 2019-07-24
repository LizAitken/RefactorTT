"use strict"
let screenHeight = window.visualViewport.height;
let screenWidth = window.visualViewport.width;

//Bending the title
//Credit to: https://appendto.com/2016/09/how-to-make-circularcurved-text-with-javascript/
// circularText("                 Traveling Tails", 230, 0);
function circularText(txt, radius, classIndex) {
  txt = txt.split(""),
    classIndex = document.getElementsByClassName("circTxt")[classIndex];

  let deg = 360 / txt.length,
    origin = 86;

  txt.forEach((ea) => {
    ea = `<p style='height:${radius}px;position:absolute;transform:rotate(${origin}deg);transform-origin:0 100%'>${ea}</p>`;
    classIndex.innerHTML += ea;
    origin += deg;
  });
}

circularText("                  Traveling Tails", 400, 0);
// let screenHeight = window.visualViewport.height;

//Making it fit larger screen size
// Safari browser does not support visualViewport
// function changeCirText() {
//     let screenWidth = window.visualViewport.width;

//     if (screenWidth >= 1000) {
//         circularText("                  Traveling Tails", 400, 0);
//     } else if (screenWidth < 1000) {
//         circularText("                 Traveling Tails", 230, 0);
//     };
// }


/*
--------------------------------------------------------------
Your code goes in this file
--------------------------------------------------------------
*/
let root = document.querySelector("#root");
const body =document.body;
const newHeading = document.createElement('div');
body.append(newHeading);
newHeading.textContent = "BLING!";
newHeading.style.cssText = "color : black; font-size:20px; text-align: center; padding-top:20px; font-weight: bold; text-shadow: 2px 2px 2px #CE5937; font-family:sans-serif;"
let bodyColor = document.querySelector("body");
bodyColor.style.backgroundColor="#f2ca16";

const mainDiv = document.createElement("div");
body.append(mainDiv);
mainDiv.style.display = "flex";
let leftDiv = document.createElement('div');
mainDiv.append(leftDiv);
//leftDiv.textContent = "hello";
leftDiv.style.cssText = "width:55%; height: 500px; "
let para = document.createElement('h3');
leftDiv.append(para);
para.textContent = "Sizzle Your Life"
para.style.cssText = "margin-top:80px; font-size: 22px; margin-left: 120px; font-family: Helvetica; font-weight:lighter"
let boldpara = document.createElement('h1');
leftDiv.append(boldpara);
boldpara.textContent = "Make A Card";
boldpara.style.cssText = "margin-top: 15px; font-size : 45px; font-weight: bold; margin-left: 120px; font-family: sans-serif;"
let form = document.createElement('form');
leftDiv.append(form);
form.style.display = "flex";
//form contains 5 elements
//button1
let poloroid = document.createElement('button');
form.append(poloroid)
poloroid.textContent = "Poloroid"
poloroid.style.cssText = "margin-top: 30px; margin-left: 120px; height : 40px; border: 2px solid black; box-shadow: 5px 5px 4px 0px rgba(0,0,0,0.95); border-radius:10px; width:75px;  "
poloroid.style.backgroundColor = "#f2ca16";
//button2
let TV = document.createElement('button');
form.append(TV)
TV.textContent = "TV";
TV.style.cssText = "margin-top: 30px; margin-left: 16px; height : 40px; border: 2px solid black; box-shadow: 5px 5px 4px 0px rgba(0,0,0,0.95); border-radius:10px; width:45px;  "
TV.style.backgroundColor = "#f2ca16";
//button3
let Traitor = document.createElement('button');
form.append(Traitor)
Traitor.textContent = "Traitor";
Traitor.style.cssText = "margin-top: 30px; margin-left: 20px; height : 40px; border: 2px solid black; box-shadow: 5px 5px 4px 0px rgba(0,0,0,0.95); border-radius:10px; width:65px;  "
Traitor.style.backgroundColor = "#f2ca16";
//button4
let Fallguy = document.createElement('button');
form.append(Fallguy)
Fallguy.textContent = "Fall Guy";
Fallguy.style.cssText = "margin-top: 30px; margin-left: 20px; height : 40px; border: 2px solid black; box-shadow: 5px 5px 4px 0px rgba(0,0,0,0.95); border-radius:10px; width:75px;  "
Fallguy.style.backgroundColor = "#f2ca16";
//button5
let Radio = document.createElement('button');
form.append(Radio)
Radio.textContent = "Radio";
Radio.style.cssText = "margin-top: 30px; margin-left: 24px; height : 40px; border: 2px solid black; box-shadow: 5px 5px 4px 0px rgba(0,0,0,0.95); border-radius:10px; width:75px;  "
Radio.style.backgroundColor = "#f2ca16";

//next form 

let secondform = document.createElement('form');
leftDiv.append(secondform);
secondform.style.display = "flex";

//first 
let Bling = document.createElement('input');
secondform.append(Bling)
Bling.placeholder = "  Name your Bling!"
Bling.textContent = "Bling!!"
Bling.style.cssText = "margin-top: 30px; margin-left: 120px; height : 40px; border: 2px solid black; box-shadow: 3px 3px 4px 0px rgba(0,0,0,0.95); border-radius:10px; width:160px; color:white "
Bling.style.backgroundColor = "#403e38";

//second

let selectBackground = document.createElement("select");
secondform.append(selectBackground);

let gold = document.createElement("option");
selectBackground.append(gold);
gold.textContent = "Gold";
gold.style.cssText = "margin-top: 30px; margin-left: 120px; height : 40px; border: 2px solid black; box-shadow: 3px 3px 4px 0px rgba(0,0,0,0.95); border-radius:10px; width:160px; color:white "
gold.style.backgroundColor = "#403e38";




let rightDiv = document.createElement('div');
mainDiv.append(rightDiv);
rightDiv.textContent = "hi";
rightDiv.style.cssText = "width:45%; height: 500px; "


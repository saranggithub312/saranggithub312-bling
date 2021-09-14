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
//newHeading.style.cssText = "color : black; font-size:24px; text-align: center; padding-top:20px; font-weight: bold; text-shadow: 2px 2px 2px #CE5937; font-family:sans-serif;"
 newHeading.style.color = "black";
 newHeading.style.fontSize = "24px"
newHeading.style.textAlign = "center";
newHeading.style.paddingTop = "20px";
newHeading.style.fontWeight = "bold";
newHeading.style.textShadow = "2px 2px 2px #CE5937";
newHeading.style.fontFamily = "sansSerif"

let bodyColor = document.querySelector("body");
bodyColor.style.backgroundColor="#f2ca16";

const mainDiv = document.createElement("div");
body.append(mainDiv);
mainDiv.style.display = "flex";
let leftDiv = document.createElement('div');
mainDiv.append(leftDiv);
//leftDiv.textContent = "hello";
//leftDiv.style.cssText = "width:55%; height: 500px; "
leftDiv.style.width = "55%";
leftDiv.style.height = "500px";
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
poloroid.style.backgroundColor = "inherit";
//button2
let TV = document.createElement('button');
form.append(TV)
TV.textContent = "TV";
TV.style.cssText = "margin-top: 30px; margin-left: 16px; height : 40px; border: 2px solid black; box-shadow: 5px 5px 4px 0px rgba(0,0,0,0.95); border-radius:10px; width:45px;  "
TV.style.backgroundColor = "inherit";
//button3
let Traitor = document.createElement('button');
form.append(Traitor)
Traitor.textContent = "Traitor";
Traitor.style.cssText = "margin-top: 30px; margin-left: 20px; height : 40px; border: 2px solid black; box-shadow: 5px 5px 4px 0px rgba(0,0,0,0.95); border-radius:10px; width:65px;  "
Traitor.style.backgroundColor = "inherit";
//button4
let Fallguy = document.createElement('button');
form.append(Fallguy)
Fallguy.textContent = "Fall Guy";
Fallguy.style.cssText = "margin-top: 30px; margin-left: 20px; height : 40px; border: 2px solid black; box-shadow: 5px 5px 4px 0px rgba(0,0,0,0.95); border-radius:10px; width:75px;  "
Fallguy.style.backgroundColor = "inherit";
//button5
let Radio = document.createElement('button');
form.append(Radio)
Radio.textContent = "Radio";
Radio.style.cssText = "margin-top: 30px; margin-left: 24px; height : 40px; border: 2px solid black; box-shadow: 5px 5px 4px 0px rgba(0,0,0,0.95); border-radius:10px; width:75px;  "
Radio.style.backgroundColor = "inherit";

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
//each elements in select
//gold
let gold = document.createElement("option");
selectBackground.append(gold);
gold.textContent = "Gold";
selectBackground.style.cssText = "margin-top: 30px; margin-left: 20px; height : 40px; border: 2px solid black; box-shadow: 3px 3px 4px 0px rgba(0,0,0,0.95); border-radius:10px; width:110px; color:white "
selectBackground.style.backgroundColor = "#403e38";

//Snow
let snow = document.createElement("option");
selectBackground.append(snow);
snow.textContent = "Snow";
selectBackground.style.cssText = "margin-top: 30px; margin-left: 20px; height : 40px; border: 2px solid black; box-shadow: 3px 3px 4px 0px rgba(0,0,0,0.95); border-radius:10px; width:110px; color:white "
selectBackground.style.backgroundColor = "#403e38";

//DodgerBlue
let DodgerBlue = document.createElement("option");
selectBackground.append(DodgerBlue);
DodgerBlue.textContent = "DodgerBlue";
selectBackground.style.cssText = "margin-top: 30px; margin-left: 20px; height : 40px; border: 2px solid black; box-shadow: 3px 3px 4px 0px rgba(0,0,0,0.95); border-radius:10px; width:110px; color:white "
selectBackground.style.backgroundColor = "#403e38";

//LightSalmon
let LightSalmon = document.createElement("option");
selectBackground.append(LightSalmon);
LightSalmon.textContent = "LightSalmon";
selectBackground.style.cssText = "margin-top: 30px; margin-left: 20px; height : 40px; border: 2px solid black; box-shadow: 3px 3px 4px 0px rgba(0,0,0,0.95); border-radius:10px; width:110px; color:white "
selectBackground.style.backgroundColor = "#403e38";

//LightCoral
let LightCoral = document.createElement("option");
selectBackground.append(LightCoral);
LightCoral.textContent = "LightCoral";
selectBackground.style.cssText = "margin-top: 30px; margin-left: 20px; height : 40px; border: 2px solid black; box-shadow: 3px 3px 4px 0px rgba(0,0,0,0.95); border-radius:10px; width:110px; color:white "
selectBackground.style.backgroundColor = "#403e38";

//LightPink
let LightPink = document.createElement("option");
selectBackground.append(LightPink);
LightPink.textContent = "LightPink";
selectBackground.style.cssText = "margin-top: 30px; margin-left: 20px; height : 40px; border: 2px solid black; box-shadow: 3px 3px 4px 0px rgba(0,0,0,0.95); border-radius:10px; width:110px; color:white "
selectBackground.style.backgroundColor = "#403e38";

//OrangeRed
let OrangeRed = document.createElement("option");
selectBackground.append(OrangeRed);
OrangeRed.textContent = "OrangeRed";
selectBackground.style.cssText = "margin-top: 30px; margin-left: 20px; height : 40px; border: 2px solid black; box-shadow: 3px 3px 4px 0px rgba(0,0,0,0.95); border-radius:10px; width:110px; color:white "
selectBackground.style.backgroundColor = "#403e38";


//Tomota
let Tomota = document.createElement("option");
selectBackground.append(Tomota);
Tomota.textContent = "Tomota";
selectBackground.style.cssText = "margin-top: 30px; margin-left: 20px; height : 40px; border: 2px solid black; box-shadow: 3px 3px 4px 0px rgba(0,0,0,0.95); border-radius:10px; width:110px; color:white "
selectBackground.style.backgroundColor = "#403e38";

//DarkOrchid
let DarkOrchid = document.createElement("option");
selectBackground.append(DarkOrchid);
DarkOrchid.textContent = "DarkOrchid";
selectBackground.style.cssText = "margin-top: 30px; margin-left: 20px; height : 40px; border: 2px solid black; box-shadow: 3px 3px 4px 0px rgba(0,0,0,0.95); border-radius:10px; width:110px; color:white "
selectBackground.style.backgroundColor = "#403e38";


//SpringGreen
let SpringGreen = document.createElement("option");
selectBackground.append(SpringGreen);
SpringGreen.textContent = "SpringGreen";
selectBackground.style.cssText = "margin-top: 30px; margin-left: 20px; height : 40px; border: 2px solid black; box-shadow: 3px 3px 4px 0px rgba(0,0,0,0.95); border-radius:10px; width:110px; color:white "
selectBackground.style.backgroundColor = "#403e38";


//Thistle
let Thistle = document.createElement("option");
selectBackground.append(Thistle);
Thistle.textContent = "Thistle";
selectBackground.style.cssText = "margin-top: 30px; margin-left: 20px; height : 40px; border: 2px solid black; box-shadow: 3px 3px 4px 0px rgba(0,0,0,0.95); border-radius:10px; width:110px; color:white "
selectBackground.style.backgroundColor = "#403e38";

//third
//create subForm
let newForm = document.createElement("form");
secondform.append(newForm);
newForm.style.cssText = "margin-top: 30px; margin-left: 20px; height : 40px; border: 2px solid black; box-shadow: 3px 3px 4px 0px rgba(0,0,0,0.95); border-radius:10px; width:170px; color:white "
newForm.style.backgroundColor = "#403e38";
newForm.display = "flex";

//selectblob
let blobone = document.createElement("input");
newForm.append(blobone);
blobone.type = "radio";
blobone.name = "click"
//blobone.value = "true"
blobone.style.cssText = "margin-top: 10px; margin-left: 10px; "
blobone.style.backgroundColor = "#403e38";

let labelone = document.createElement("label");
newForm.append(labelone);
labelone.type = "label";
labelone.textContent = "Blob";
labelone.style.cssText = "margin-top: 46px; margin-left: 7px; "

//nope

let radiotwo = document.createElement("input");
newForm.append(radiotwo);
radiotwo.type = "radio";
radiotwo.name = "click"
//blobone.value = "true"
radiotwo.style.cssText = "margin-top: 10px; margin-left: 25px; "
radiotwo.style.backgroundColor = "#403e38";

let labeltwo = document.createElement("label");
newForm.append(labeltwo);
labeltwo.type = "label";
labeltwo.textContent = "Nope";
labeltwo.style.cssText = "margin-top: 46px; margin-left: 7px; "

//finalForm

let thirdform = document.createElement('form');
leftDiv.append(thirdform);
secondform.style.display = "flex";

let submit = document.createElement('button');
thirdform.append(submit);
submit.type = "submit";
submit.style.cssText = "margin-top: 30px; margin-left: 120px; height : 45px; border: 2px solid black; box-shadow: 5px 5px 4px 0px rgba(0,0,0,0.90); border-radius:7px; width:45px; cursor : pointer "
submit.style.backgroundColor = "inherit";

//image of camera
let img = document.createElement('img');
submit.append(img);
img.src = "assets/images/camera.png";
img.style.cssText = "width:20px; height:20px"


let rightDiv = document.createElement('div');
mainDiv.append(rightDiv);
//rightDiv.textContent = "hi";
rightDiv.style.cssText = "width:45%; height: 500px; "
//right sub div
const rightsubdiv =document.createElement('div')
rightDiv.append(rightsubdiv);
rightsubdiv.style.height = "80px";

//adding Font to right sub Div

let largerFont = document.createElement('h1');
rightsubdiv.append(largerFont);
//change here.............................
//largerFont.textContent = "Bling!!";
largerFont.style.fontSize = "5em";
largerFont.style.fontFamily = "Gill Sans"
largerFont.style.fontWeight = "bolder"
largerFont.style.marginTop = "60px"
largerFont.style.marginLeft = "200px"
largerFont.style.color = "#403e38"
//right sub div two
const rightsubdivtwo = document.createElement('div');
rightDiv.append(rightsubdivtwo);
rightsubdivtwo.style.height = "350px";
rightsubdivtwo.style.position = "relative"
//ightsubdivtwo.display = "flex"

//setting a new image Div
// let images = document.createElement('div');
// rightsubdivtwo.append(images)
// images.style.height = "350px";
// images.style.marginLeft = "180px"


//blob image
let blobimage  = document.createElement('img');
rightsubdivtwo.append(blobimage);
blobimage.src = "assets/images/blob.png" ;
blobimage.style.width = "27em";
blobimage.style.height = "27em";
blobimage.style.marginLeft = "120px";
blobimage.style.marginTop = "-40px";
blobimage.style.position = "relative";
blobimage.style.visibility = "hidden";



//change image

let randomImage = document.createElement('img');
rightsubdivtwo.append(randomImage);
randomImage.src = "assets/images/polaroid.png" ;
randomImage.style.position = "absolute";
randomImage.style.width = "15em";
randomImage.style.right = "12em";
randomImage.style.top = "4em";
randomImage.style.visibility = "hidden";

     
     
     


//adding image by the button events
// let changeImage = document.createElement('img');
// rightsubdivtwo.append(changeImage);
//changeImage.src = "assets/images/among-us.png";

//  changeImage.style.width = "134px";
//  changeImage.style.height = "134px"
//  changeImage.style.marginLeft = "270px"
//  changeImage.style.marginTop = "5px"




//additional div for adding images
const secondDiv = document.createElement('div');
body.append(secondDiv);
secondDiv.style.height = "200px";


const footer = document.createElement('div');
body.append(footer);
footer.style.height = "50px";
footer.display = "flex";
footer.style.textAlign = "center";

//footer
 let footerword = document.createElement('p');
 footer.append(footerword);
footerword.textContent = " 🖤Credits:  Poloroid  TV  Traitor FallGuy   Radio";
footerword.style.wordSpacing = "15px";
footerword.style.fontFamily = "sans-serif";
footerword.style.fontWeight = "600";
footerword.style.fontSize = "15px";



//changing the color functionality

selectBackground.onchange = () =>{
    body.style.backgroundColor = selectBackground.value;

}

//working on input text property

Bling.onkeyup = ()=>{
    largerFont.textContent = Bling.value;
}

//blob checked list

blobone.onchange =() =>{

    blobimage.src = "assets/images/blob.png" ;
    blobimage.style.width = "27em";
    blobimage.style.height = "27em";
    blobimage.style.marginLeft = "120px";
    blobimage.style.marginTop = "-40px";
    blobimage.style.visibility = "visible";
     
}

radiotwo.onchange = () =>{
    
    blobimage.style.visibility = "hidden";
}
//5  images to display



//polaroid
poloroid.addEventListener('click', (e)=>{
    //changeImage.style.backgroundImage = "url(assets/images/poloroid.png) no-repeat" 
    randomImage.src = "assets/images/polaroid.png" ;
    randomImage.style.width = "15em";
    randomImage.style.right = "12em";
    randomImage.style.top = "4em";
    randomImage.style.visibility = "visible";
    e.preventDefault();
    
});
//TV

TV.addEventListener('click', (e)=>{
    //changeImage.style.backgroundImage = "url(assets/images/poloroid.png) no-repeat" 
    randomImage.src = "assets/images/tv.png" ;
    randomImage.style.width = "15em";
    randomImage.style.right = "12em";
    randomImage.style.top = "5em";
    randomImage.style.visibility = "visible";
    e.preventDefault();
    
});

//Traitor

Traitor.addEventListener('click', (e)=>{
    //changeImage.style.backgroundImage = "url(assets/images/poloroid.png) no-repeat" 
    randomImage.src = "assets/images/among-us.png" ;
    randomImage.style.width = "15em";
    randomImage.style.right = "12em";
    randomImage.style.top = "4em";
    randomImage.style.visibility = "visible";
    e.preventDefault();
    
});

//Fall Guy

Fallguy.addEventListener('click', (e)=>{
    //changeImage.style.backgroundImage = "url(assets/images/poloroid.png) no-repeat" 
    randomImage.src = "assets/images/fall-guy-01.png" ;
    randomImage.style.width = "15em";
    randomImage.style.right = "12em";
    randomImage.style.top = "4em";
    randomImage.style.visibility = "visible";
    e.preventDefault();
    
});

//Radio

Radio.addEventListener('click', (e)=>{
    //changeImage.style.backgroundImage = "url(assets/images/poloroid.png) no-repeat" 
    randomImage.src = "assets/images/radio-02.png" ;
    randomImage.style.width = "15em";
    randomImage.style.right = "12em";
    randomImage.style.top = "6em";
    randomImage.style.visibility = "visible";
    e.preventDefault();
    
});

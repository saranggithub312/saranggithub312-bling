/*
--------------------------------------------------------------
Your code goes in this file
--------------------------------------------------------------
*/
let root = document.querySelector("#root");
 

const body =document.body;
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.justifyContent = "space-between";   
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
newHeading.style.fontFamily = "sansSerif";



let bodyColor = document.querySelector("body");
bodyColor.style.backgroundColor="#f2ca16";

const mainDiv = document.createElement("div");
body.append(mainDiv);
mainDiv.style.display = "flex";
let leftDiv = document.createElement('div');
mainDiv.append(leftDiv);
//leftDiv.textContent = "hello";
//leftDiv.style.cssText = "width:55%; height: 500px; "
leftDiv.style.width = "70%";
let para = document.createElement('h3');
leftDiv.append(para);
para.textContent = "Sizzle Your Life"
//para.style.cssText = "margin-top:80px; font-size: 22px; margin-left: 120px; font-family: Helvetica; font-weight:lighter"
para.style.marginTop = "80px";
para.style.fontSize = "22px";
para.style.marginLeft = "120px";
para.style.fontFamily = "Helvetica";
para.style.fontWeight = "lighter";


let boldpara = document.createElement('h1');
leftDiv.append(boldpara);
boldpara.textContent = "Make A Card";
//boldpara.style.cssText = "margin-top: 15px; font-size : 45px; font-weight: bold; margin-left: 120px; font-family: sans-serif;"
boldpara.style.marginTop = "15px";
boldpara.style.fontSize = "45px";
boldpara.style.fontWeight = "bold";
boldpara.style.marginLeft = "120px";
boldpara.style.fontFamily = "sans-serif";

let form = document.createElement('form');
leftDiv.append(form);
form.style.display = "flex";
//form contains 5 elements
//button1
let poloroid = document.createElement('button');
form.append(poloroid)
poloroid.textContent = "Polaroid"
//poloroid.style.cssText = "margin-top: 30px; margin-left: 120px; height : 40px; border: 2px solid black; box-shadow: 5px 5px 4px 0px rgba(0,0,0,0.95); border-radius:10px; width:75px;  "
poloroid.style.marginTop = "30px";
poloroid.style.marginLeft = "120px";
poloroid.style.height = "40px";
poloroid.style.border = "2px solid black";
poloroid.style.boxShadow = "5px 5px 4px 0px rgba(0,0,0,0.95)"
poloroid.style.borderRadius = "10px";
poloroid.style.width = "75px"

poloroid.style.backgroundColor = "inherit";
//button2
let TV = document.createElement('button');
form.append(TV)
TV.textContent = "TV";
//TV.style.cssText = "margin-top: 30px; margin-left: 16px; height : 40px; border: 2px solid black; box-shadow: 5px 5px 4px 0px rgba(0,0,0,0.95); border-radius:10px; width:45px;  "
TV.style.marginTop = "30px";
TV.style.marginLeft = "16px";
TV.style.height = "40px";
TV.style.border = "2px solid black";
TV.style.boxShadow = "5px 5px 4px 0px rgba(0,0,0,0.95)";
TV.style.borderRadius = "10px";
TV.style.width = "45px";

TV.style.backgroundColor = "inherit";
//button3
let Traitor = document.createElement('button');
form.append(Traitor)
Traitor.textContent = "Traitor";
//Traitor.style.cssText = "margin-top: 30px; margin-left: 20px; height : 40px; border: 2px solid black; box-shadow: 5px 5px 4px 0px rgba(0,0,0,0.95); border-radius:10px; width:65px;  "
Traitor.style.marginTop = "30px";
Traitor.style.marginLeft = "20px";
Traitor.style.height = "40px";
Traitor.style.border = "2px solid black";
Traitor.style.boxShadow = "5px 5px 4px 0px rgba(0,0,0,0.95)";
Traitor.style.borderRadius = "10px";
Traitor.style.width = "65px";

Traitor.style.backgroundColor = "inherit";
//button4
let Fallguy = document.createElement('button');
form.append(Fallguy)
Fallguy.textContent = "Fall Guy";
//Fallguy.style.cssText = "margin-top: 30px; margin-left: 20px; height : 40px; border: 2px solid black; box-shadow: 5px 5px 4px 0px rgba(0,0,0,0.95); border-radius:10px; width:75px;  "
Fallguy.style.marginTop = "30px";
Fallguy.style.marginLeft = "20px";
Fallguy.style.height = "40px";
Fallguy.style.border = "2px solid black";
Fallguy.style.boxShadow = "5px 5px 4px 0px rgba(0,0,0,0.95)";
Fallguy.style.borderRadius = "10px";
Fallguy.style.width = "75px";

Fallguy.style.backgroundColor = "inherit";
//button5
let Radio = document.createElement('button');
form.append(Radio)
Radio.textContent = "Radio";
//Radio.style.cssText = "margin-top: 30px; margin-left: 24px; height : 40px; border: 2px solid black; box-shadow: 5px 5px 4px 0px rgba(0,0,0,0.95); border-radius:10px; width:75px;  "
Radio.style.marginTop = "30px";
Radio.style.marginLeft = "24px";
Radio.style.height = "40px";
Radio.style.border = "2px solid black";
Radio.style.boxShadow = "5px 5px 4px 0px rgba(0,0,0,0.95)";
Radio.style.borderRadius = "10px";
Radio.style.width = "75px";

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
//Bling.style.cssText = "margin-top: 30px; margin-left: 120px; height : 40px; border: 2px solid black; box-shadow: 3px 3px 4px 0px rgba(0,0,0,0.95); border-radius:10px; width:160px; color:white "
Bling.style.marginTop = "30px";
Bling.style.marginLeft = "120px";
Bling.style.height = "40px";
Bling.style.border = "2px solid black";
Bling.style.boxShadow = "3px 3px 4px 0px rgba(0,0,0,0.95)";
Bling.style.borderRadius = "10px";
Bling.style.width = "160px";
Bling.style.color = "white";

Bling.style.backgroundColor = "#403e38";

//second

let selectBackground = document.createElement("select");
secondform.append(selectBackground);
//each elements in select
//gold
let gold = document.createElement("option");
selectBackground.append(gold);
gold.textContent = "Gold";
//selectBackground.style.cssText = "margin-top: 30px; margin-left: 20px; height : 40px; border: 2px solid black; box-shadow: 3px 3px 4px 0px rgba(0,0,0,0.95); border-radius:10px; width:110px; color:white "
selectBackground.style.marginTop = "30px";
selectBackground.style.marginLeft = "20px";
selectBackground.style.height = "40px";
selectBackground.style.border = "2px solid black";
selectBackground.style.boxShadow = "3px 3px 4px 0px rgba(0,0,0,0.95)";
selectBackground.style.borderRadius = "10px";
selectBackground.style.width = "110px";
selectBackground.style.color = "white";

selectBackground.style.backgroundColor = "#403e38";

//Snow
let snow = document.createElement("option");
selectBackground.append(snow);
snow.textContent = "Snow";
//selectBackground.style.cssText = "margin-top: 30px; margin-left: 20px; height : 40px; border: 2px solid black; box-shadow: 3px 3px 4px 0px rgba(0,0,0,0.95); border-radius:10px; width:110px; color:white "
selectBackground.style.marginTop = "30px";
selectBackground.style.marginLeft = "20px";
selectBackground.style.height = "40px";
selectBackground.style.border = "2px solid black";
selectBackground.style.boxShadow = "3px 3px 4px 0px rgba(0,0,0,0.95)";
selectBackground.style.borderRadius = "10px";
selectBackground.style.width = "110px";
selectBackground.style.color = "white";

selectBackground.style.backgroundColor = "#403e38";

//DodgerBlue
let DodgerBlue = document.createElement("option");
selectBackground.append(DodgerBlue);
DodgerBlue.textContent = "DodgerBlue";
//selectBackground.style.cssText = "margin-top: 30px; margin-left: 20px; height : 40px; border: 2px solid black; box-shadow: 3px 3px 4px 0px rgba(0,0,0,0.95); border-radius:10px; width:110px; color:white "
selectBackground.style.marginTop = "30px";
selectBackground.style.marginLeft = "20px";
selectBackground.style.height = "40px";
selectBackground.style.border = "2px solid black";
selectBackground.style.boxShadow = "3px 3px 4px 0px rgba(0,0,0,0.95)";
selectBackground.style.borderRadius = "10px";
selectBackground.style.width = "110px";
selectBackground.style.color = "white";

selectBackground.style.backgroundColor = "#403e38";

//LightSalmon
let LightSalmon = document.createElement("option");
selectBackground.append(LightSalmon);
LightSalmon.textContent = "LightSalmon";
//selectBackground.style.cssText = "margin-top: 30px; margin-left: 20px; height : 40px; border: 2px solid black; box-shadow: 3px 3px 4px 0px rgba(0,0,0,0.95); border-radius:10px; width:110px; color:white "
selectBackground.style.marginTop = "30px";
selectBackground.style.marginLeft = "20px";
selectBackground.style.height = "40px";
selectBackground.style.border = "2px solid black";
selectBackground.style.boxShadow = "3px 3px 4px 0px rgba(0,0,0,0.95)";
selectBackground.style.borderRadius = "10px";
selectBackground.style.width = "110px";
selectBackground.style.color = "white";
selectBackground.style.backgroundColor = "#403e38";

//LightCoral
let LightCoral = document.createElement("option");
selectBackground.append(LightCoral);
LightCoral.textContent = "LightCoral";
//selectBackground.style.cssText = "margin-top: 30px; margin-left: 20px; height : 40px; border: 2px solid black; box-shadow: 3px 3px 4px 0px rgba(0,0,0,0.95); border-radius:10px; width:110px; color:white "
selectBackground.style.marginTop = "30px";
selectBackground.style.marginLeft = "20px";
selectBackground.style.height = "40px";
selectBackground.style.border = "2px solid black";
selectBackground.style.boxShadow = "3px 3px 4px 0px rgba(0,0,0,0.95)";
selectBackground.style.borderRadius = "10px";
selectBackground.style.width = "110px";
selectBackground.style.color = "white";

selectBackground.style.backgroundColor = "#403e38";

//LightPink
let LightPink = document.createElement("option");
selectBackground.append(LightPink);
LightPink.textContent = "LightPink";
//selectBackground.style.cssText = "margin-top: 30px; margin-left: 20px; height : 40px; border: 2px solid black; box-shadow: 3px 3px 4px 0px rgba(0,0,0,0.95); border-radius:10px; width:110px; color:white "
selectBackground.style.marginTop = "30px";
selectBackground.style.marginLeft = "20px";
selectBackground.style.height = "40px";
selectBackground.style.border = "2px solid black";
selectBackground.style.boxShadow = "3px 3px 4px 0px rgba(0,0,0,0.95)";
selectBackground.style.borderRadius = "10px";
selectBackground.style.width = "110px";
selectBackground.style.color = "white";
selectBackground.style.backgroundColor = "#403e38";

//OrangeRed
let OrangeRed = document.createElement("option");
selectBackground.append(OrangeRed);
OrangeRed.textContent = "OrangeRed";
//selectBackground.style.cssText = "margin-top: 30px; margin-left: 20px; height : 40px; border: 2px solid black; box-shadow: 3px 3px 4px 0px rgba(0,0,0,0.95); border-radius:10px; width:110px; color:white "
selectBackground.style.marginTop = "30px";
selectBackground.style.marginLeft = "20px";
selectBackground.style.height = "40px";
selectBackground.style.border = "2px solid black";
selectBackground.style.boxShadow = "3px 3px 4px 0px rgba(0,0,0,0.95)";
selectBackground.style.borderRadius = "10px";
selectBackground.style.width = "110px";
selectBackground.style.color = "white";

selectBackground.style.backgroundColor = "#403e38";


//Tomota
let Tomato = document.createElement("option");
selectBackground.append(Tomato);
Tomato.textContent = "Tomato";
//selectBackground.style.cssText = "margin-top: 30px; margin-left: 20px; height : 40px; border: 2px solid black; box-shadow: 3px 3px 4px 0px rgba(0,0,0,0.95); border-radius:10px; width:110px; color:white "
selectBackground.style.marginTop = "30px";
selectBackground.style.marginLeft = "20px";
selectBackground.style.height = "40px";
selectBackground.style.border = "2px solid black";
selectBackground.style.boxShadow = "3px 3px 4px 0px rgba(0,0,0,0.95)";
selectBackground.style.borderRadius = "10px";
selectBackground.style.width = "110px";
selectBackground.style.color = "white";

selectBackground.style.backgroundColor = "#403e38";

//DarkOrchid
let DarkOrchid = document.createElement("option");
selectBackground.append(DarkOrchid);
DarkOrchid.textContent = "DarkOrchid";
//selectBackground.style.cssText = "margin-top: 30px; margin-left: 20px; height : 40px; border: 2px solid black; box-shadow: 3px 3px 4px 0px rgba(0,0,0,0.95); border-radius:10px; width:110px; color:white "
selectBackground.style.marginTop = "30px";
selectBackground.style.marginLeft = "20px";
selectBackground.style.height = "40px";
selectBackground.style.border = "2px solid black";
selectBackground.style.boxShadow = "3px 3px 4px 0px rgba(0,0,0,0.95)";
selectBackground.style.borderRadius = "10px";
selectBackground.style.width = "110px";
selectBackground.style.color = "white";

selectBackground.style.backgroundColor = "#403e38";


//SpringGreen
let SpringGreen = document.createElement("option");
selectBackground.append(SpringGreen);
SpringGreen.textContent = "SpringGreen";
//selectBackground.style.cssText = "margin-top: 30px; margin-left: 20px; height : 40px; border: 2px solid black; box-shadow: 3px 3px 4px 0px rgba(0,0,0,0.95); border-radius:10px; width:110px; color:white "
selectBackground.style.marginTop = "30px";
selectBackground.style.marginLeft = "20px";
selectBackground.style.height = "40px";
selectBackground.style.border = "2px solid black";
selectBackground.style.boxShadow = "3px 3px 4px 0px rgba(0,0,0,0.95)";
selectBackground.style.borderRadius = "10px";
selectBackground.style.width = "110px";
selectBackground.style.color = "white";

selectBackground.style.backgroundColor = "#403e38";


//Thistle
let Thistle = document.createElement("option");
selectBackground.append(Thistle);
Thistle.textContent = "Thistle";
//selectBackground.style.cssText = "margin-top: 30px; margin-left: 20px; height : 40px; border: 2px solid black; box-shadow: 3px 3px 4px 0px rgba(0,0,0,0.95); border-radius:10px; width:110px; color:white "
selectBackground.style.marginTop = "30px";
selectBackground.style.marginLeft = "20px";
selectBackground.style.height = "40px";
selectBackground.style.border = "2px solid black";
selectBackground.style.boxShadow = "3px 3px 4px 0px rgba(0,0,0,0.95)";
selectBackground.style.borderRadius = "10px";
selectBackground.style.width = "110px";
selectBackground.style.color = "white";

selectBackground.style.backgroundColor = "#403e38";

//third
//create subForm
let newForm = document.createElement("form");
secondform.append(newForm);
//newForm.style.cssText = "margin-top: 30px; margin-left: 20px; height : 40px; border: 2px solid black; box-shadow: 3px 3px 4px 0px rgba(0,0,0,0.95); border-radius:10px; width:170px; color:white "
newForm.style.marginTop = "30px";
newForm.style.marginLeft = "20px";
newForm.style.height = "40px";
newForm.style.border = "2px solid black";
newForm.style.boxShadow = "3px 3px 4px 0px rgba(0,0,0,0.95)";
newForm.style.borderRadius = "10px";
newForm.style.width = "170px";
newForm.style.color = "white";


newForm.style.backgroundColor = "#403e38";
newForm.display = "flex";

//selectblob
let blobone = document.createElement("input");
newForm.append(blobone);
blobone.type = "radio";
blobone.name = "click"
//blobone.value = "true"
//blobone.style.cssText = "margin-top: 10px; margin-left: 10px; "
blobone.style.marginTop = "10px";
blobone.style.marginLeft = "10px";
blobone.style.backgroundColor = "#403e38";

let labelone = document.createElement("label");
newForm.append(labelone);
labelone.type = "label";
labelone.textContent = "Blob";
//labelone.style.cssText = "margin-top: 46px; margin-left: 7px; "
labelone.style.marginTop = "46px";
labelone.style.marginLeft = "7px";

//nope

let radiotwo = document.createElement("input");
newForm.append(radiotwo);
radiotwo.type = "radio";
radiotwo.name = "click"
//blobone.value = "true"
//radiotwo.style.cssText = "margin-top: 10px; margin-left: 25px; "
radiotwo.style.marginTop = "10px";
radiotwo.style.marginLeft = "25px";

radiotwo.style.backgroundColor = "#403e38";

let labeltwo = document.createElement("label");
newForm.append(labeltwo);
labeltwo.type = "label";
labeltwo.textContent = "Nope";
labeltwo.style.cssText = "margin-top: 46px; margin-left: 7px; "
labeltwo.style.marginTop = "46px";


//finalForm

let thirdform = document.createElement('form');
leftDiv.append(thirdform);
secondform.style.display = "flex";

let submit = document.createElement('button');
thirdform.append(submit);
submit.type = "submit";
//submit.style.cssText = "margin-top: 30px; margin-left: 120px; height : 45px; border: 2px solid black; box-shadow: 5px 5px 4px 0px rgba(0,0,0,0.90); border-radius:7px; width:45px; cursor : pointer "
submit.style.marginTop = "30px";
submit.style.marginLeft = "120px";
submit.style.height = "45px";
submit.style.border = "2px solid black";
submit.style.boxShadow = "5px 5px 4px 0px rgba(0,0,0,0.90)";
submit.style.borderRadius = "7px";
submit.style.width = "45px";
submit.style.cursor = "pointer"

submit.style.backgroundColor = "inherit";

//image of camera
let img = document.createElement('img');
submit.append(img);
img.src = "assets/images/camera.png";
img.style.cssText = "width:20px; height:20px"


let rightDiv = document.createElement('div');
mainDiv.append(rightDiv);
//rightDiv.textContent = "hi";
rightDiv.style.cssText = "display: flex; width:25%;  "
// rightDiv.style.display = "flex";
rightDiv.style.flexDirection = "column";
//right sub div
const rightsubdiv = document.createElement('div')
rightDiv.append(rightsubdiv);


//adding Font to right sub Div

let largerFont = document.createElement('h1');
rightsubdiv.append(largerFont);
//change here.............................
//largerFont.textContent = "Bling!!";
largerFont.style.fontSize = "4.5em";
largerFont.style.fontFamily = "Gill Sans"
largerFont.style.fontWeight = "bolder"
largerFont.style.color = "#403e38"
largerFont.style.marginLeft = "30px"
//right sub div two
const rightsubdivtwo = document.createElement('div');
rightDiv.append(rightsubdivtwo);
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
blobimage.style.position = "relative";
blobimage.src = "assets/images/blob.png" ;
blobimage.style.width = "21em";
blobimage.style.marginLeft ="auto";
blobimage.style.marginRight ="auto";
blobimage.style.visibility = "hidden";



//change image

let randomImage = document.createElement('img');
rightsubdivtwo.append(randomImage);
randomImage.src = "assets/images/polaroid.png" ;
randomImage.style.position = "absolute";
randomImage.style.width = "10em";
randomImage.style.right = "6em";
randomImage.style.top = "6em";
randomImage.style.visibility = "hidden";



//additional div for adding images
let secondDiv = document.createElement('div');
body.append(secondDiv);
secondDiv.style.display = "flex";
secondDiv.style.flexWrap = "wrap";
secondDiv.style.flexGrow = "1";
secondDiv.style.marginTop = "2em";
secondDiv.style.marginBottom = "2em";
secondDiv.style.padding = "2em";
secondDiv.style.margin = "0 5em"
secondDiv.style.justifyContent = "space-around";


//div elements

submit.addEventListener('click',(e)=>{
    let divElements = document.createElement('div');
    divElements.innerHTML = rightDiv.innerHTML;
    secondDiv.append(divElements);

    //divElements.style.flexShrink = "0"
    e.preventDefault();
    
    //  divElements.style.width = "23vw";
    //  divElements.style.height = "23vw";
    divElements.style.border = "solid 1px black";
    divElements.style.boxShadow = "3px 3px 2px #262626"
    divElements.style.marginBottom = "2em";
    divElements.style.marginLeft = "2em";
    divElements.style.position = "relative";
    divElements.style.backgroundColor = selectBackground.value;
    let deleteButton = document.createElement('img')
    divElements.append(deleteButton)
    deleteButton.style.position = "absolute";
    deleteButton.src = "assets/images/icon_delete.png"
    deleteButton.style.width = "50px"
    deleteButton.style.top = "-20px";
    deleteButton.style.right = "-20px";
    deleteButton.style.width = "3em"
    deleteButton.onclick = ()=>{
        divElements.remove()
    }

});



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
    blobimage.style.width = "21em";
    blobimage.style.marginLeft ="auto";
    blobimage.style.marginRight ="auto";
    
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
    randomImage.style.width = "10em";
    randomImage.style.right = "5em";
    randomImage.style.top = "6em";
    randomImage.style.visibility = "visible";
    e.preventDefault();
    poloroid.style.backgroundColor = "#403e38";
    poloroid.style.color = "white";

    
});
//TV

TV.addEventListener('click', (e)=>{
    //changeImage.style.backgroundImage = "url(assets/images/poloroid.png) no-repeat" 
    randomImage.src = "assets/images/tv.png" ;
    randomImage.style.width = "9em";
    randomImage.style.right = "7em";
    randomImage.style.top = "6em";
    randomImage.style.visibility = "visible";
    e.preventDefault();
    TV.style.backgroundColor = "#403e38";
    TV.style.color = "white";
    
});

//Traitor

Traitor.addEventListener('click', (e)=>{
    //changeImage.style.backgroundImage = "url(assets/images/poloroid.png) no-repeat" 
    randomImage.src = "assets/images/among-us.png" ;
    randomImage.style.width = "11em";
    randomImage.style.right = "7em";
    randomImage.style.top = "5em";
    randomImage.style.visibility = "visible";
    e.preventDefault();
    Traitor.style.backgroundColor = "#403e38";
    Traitor.style.color = "white";
    
});

//Fall Guy

Fallguy.addEventListener('click', (e)=>{
    //changeImage.style.backgroundImage = "url(assets/images/poloroid.png) no-repeat" 
    randomImage.src = "assets/images/fall-guy-01.png" ;
    randomImage.style.width = "9em";
    randomImage.style.right = "7.5em";
    randomImage.style.top = "6em";
    randomImage.style.visibility = "visible";
    e.preventDefault();
    Fallguy.style.backgroundColor = "#403e38";
    Fallguy.style.color = "white";
    
});

//Radio

Radio.addEventListener('click', (e)=>{
    //changeImage.style.backgroundImage = "url(assets/images/poloroid.png) no-repeat" 
    randomImage.src = "assets/images/radio-02.png" ;
    randomImage.style.width = "8.8em";
    randomImage.style.right = "7em";
    randomImage.style.top = "7em";
    randomImage.style.visibility = "visible";
    e.preventDefault();
    Radio.style.backgroundColor = "#403e38";
    Radio.style.color = "white";
    
});

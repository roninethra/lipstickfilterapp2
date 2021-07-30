var nosexposition= 0;
var noseyposition= 0;
function preload(){
img= loadImage("lips-removebg-preview.png")
}

function setup(){
    canvas=createCanvas(350,350);
    canvas.center();
    Video= createCapture(VIDEO);
    Video.size(350,350);
    Video.hide();

    poseNet= ml5.poseNet(Video, modelloaded);
    poseNet.on('pose', gotPoses);
}

function modelloaded(){
    console.log("The Model is Loaded");
}

function draw(){
image(Video, 0, 0, 350, 350);
image(img, nosexposition, noseyposition, 75, 50)
}

function setclownfilter(){
   save("LipFilterPicture.png"); 
}

function gotPoses(results){
    console.log("You came")
    if (results.length>0){
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
        nosexposition= results[0].pose.nose.x-35;
        noseyposition= results[0].pose.nose.y+13;
    }
}

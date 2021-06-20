img = "";
function setup(){
canvas = createCanvas(600,500);
canvas.center();
}

function draw(){
image(img,0,0,600,500);
fill("#4287f5");
text("golden retriver",110,50);
textSize(20);
stroke("#ff0000");
noFill();
rect(30,60,300,400);
}

function preload(){
img = loadImage("dog_cat.jpg");

}

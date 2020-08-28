
var fixedrect,moverect;
var gameobject;
var ball1,ball2,ball3,ball4;

function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(200,200,50,80);
  fixedrect.shapeColor="green";
moverect=createSprite(400,200,80,30);
moverect.shapeColor="green";

ball1=createSprite(100,100,50,50);
ball1.shapeColor="green";
ball2=createSprite(200,100,50,50);
ball2.shapeColor="green";
ball3=createSprite(300,100,50,50);
ball3.shapeColor="green";
 ball4=createSprite(400,100,50,50);
ball4.shapeColor="green";
}


function draw() {
  background(255,255,255);  
moverect.x=World.mouseX;
moverect.y=World.mouseY;
  console.log(moverect.x-fixedrect.x);

  if((istouching(moverect , ball3)))
  {
    moverect.shapeColor="red";
    ball3.shapeColor="red";
  }

  else{
    moverect.shapeColor="blue";
    ball3.shapeColor="blue";
  }
  //istouching(moverect,object1);
  drawSprites();
}

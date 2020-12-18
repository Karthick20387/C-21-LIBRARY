var fixedR;
var moveR;
var rect1,rect2

function setup() {
  createCanvas(800,400);
  fixedR=createSprite(400, 200, 50, 50);
  moveR=createSprite(400, 200, 50, 50);
  rect1=createSprite(400,100,50,50);
  rect2=createSprite(400,300,50,50);
  fixedR.shapeColor="blue"
  moveR.shapeColor="blue"
  rect1.shapeColor="blue"
  rect2.shapeColor="blue"
}

function draw() {
  background(0);  

  moveR.x=mouseX;
  moveR.y=mouseY;

  if(isTouching(moveR,rect2)){
    background("red")
  }
  if(isTouching(moveR,rect1)){
    background("green")
  }

  if(isTouching(moveR,fixedR)){
    background("yellow")
  }

  drawSprites();
}


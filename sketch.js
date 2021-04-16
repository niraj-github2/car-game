
var fixedRect, movingRect;
var gameObject1, gameObject2,wall,car;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  
  wall = createSprite(1100,400,20,800);
  car = createSprite(200,400,60,20);
  
  wall.shapeColor = "blue";
  car.shapeColor = "blue";
  
  car.velocityX = 2;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(car,wall)){
    car.shapeColor = "red";
    wall.shapeColor = "yellow";
  }
  
  else {
    car.shapeColor = "blue";
  
    wall.shapeColor = "blue";
  }
 
  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "purple";
    fixedRect.shapeColor = "yellow";
  }
  
  else {
    movingRect.shapeColor = "blue";
  
    fixedRect.shapeColor = "blue";
  }
//bounceOff(movingRect,fixedRect)
  drawSprites();



} 

function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 +object1.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
}



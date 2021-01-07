var fixedRect, movingRect,obj1,obj2,obj3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  obj1 = createSprite(300, 100, 50, 80);
  obj1.shapeColor = "green";
  obj1.debug = true;

  obj2 = createSprite(400, 100, 50, 80);
  obj2.shapeColor = "green";
  obj2.debug = true;

  obj3 = createSprite(600, 100, 50, 80);
  obj3.shapeColor = "green";
  obj3.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if(isTouching(movingRect,fixedRect)){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
} 
else if(isTouching(movingRect,obj1)){
  movingRect.shapeColor = "red";
  obj1.shapeColor = "red";
}
else if(isTouching(movingRect,obj2)){
  movingRect.shapeColor = "red";
  obj2.shapeColor = "red";
}
else{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
  obj1.shapeColor="green";
  obj2.shapeColor="green";
}

  drawSprites();
}


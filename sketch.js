var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
 movingRect.velocityY=-5;
 fixedRect.velocityY=+5;


  gameobject1= createSprite(100,100,50,50);
  gameobject1.shapeColor="green";
  gameobject2= createSprite(200,100,50,50);
  gameobject2.shapeColor="green";
  gameobject3= createSprite(300,100,50,50);
  gameobject3.shapeColor="green";
  gameobject4= createSprite(400,100,50,50);
  gameobject4.shapeColor="green";
}

function draw() {
  background(0,0,0);  
 // movingRect.x = World.mouseX;
 // movingRect.y = World.mouseY;

 if(isTouching(movingRect,gameobject4)){
  movingRect.shapeColor = "red";
  gameobject4.shapeColor = "red";
 }
 else{
  movingRect.shapeColor = "green";
  gameobject4.shapeColor = "green";
 }

 if(isTouching(movingRect,gameobject1)){
  movingRect.shapeColor = "red";
  gameobject1.shapeColor = "red";
 }
 else{
  movingRect.shapeColor = "green";
  gameobject1.shapeColor = "green";
 }
 
  drawSprites();
}


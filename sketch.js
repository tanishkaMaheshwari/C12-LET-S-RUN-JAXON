var path, pathImage;
var surferBoy, surferImage;
var invisibleLeftSide,invisibleRightSide;

function preload(){
  //pre-load images
  pathImage = loadAnimation("path.png");
  surferImage = loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png");
}

function setup(){
  createCanvas(400,400);
  
  //create an infinite path
  path = createSprite(200,200);
  path.addAnimation("pathImage",pathImage);
  path.velocityY = 4;
  path.scale=1.2;
  

  //create the running surfer
  surferBoy = createSprite(200,300);
  surferBoy.addAnimation("surferImage",surferImage);

  //creating invisible boundaries
  invisibleLeftSide = createSprite(10,400,10,400);
  invisibleRightSide = createSprite(390,400,10,400);
  invisibleLeftSide.visible = false;
  invisibleRightSide.visible = false;

  //Moving the boy
  
  surferBoy.collide(invisibleLeftSide);
  surferBoy.collide(invisibleRightSide);
}

function draw() {
  background(0);

  if(path.y > 400){
    path.y = height/2;
  }

  //Moving the boy
  //surferBoy.mouseX();

  drawSprites();
}

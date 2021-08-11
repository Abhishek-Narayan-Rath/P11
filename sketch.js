var runnerImage;
var runner, runner_running, runner_collided;
var path, pathImage;
var leftBoundary, rightBoundary;
var edges;

function preload(){
  //pre-load images
   
  runnerImage = loadAnimation('Runner-1.png', 'Runner-2.png')
  pathImage = loadImage("path.png")
}

function setup(){
  createCanvas(400,400);

  //create sprites here
path=createSprite(200,200);
path.addImage(pathImage);
path.velocityY=4;
path.scale=1.2;

runner=createSprite(200,340 ,20,6);
runner.addAnimation('runner_running',runnerImage);
runner.scale=0.08;

leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible=false;
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible=false;

} 

function draw() {
  background(30);

runner.x=mouseX;
  edges=createEdgeSprites();
  runner.collide(edges[3]);
  runner.collide(leftBoundary);
  runner.collide(rightBoundary);

  if(path.y > 400 ){
    path.y = height/2;
  }
  drawSprites();
}

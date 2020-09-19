
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var ground;
var score=0,survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  monkey=createSprite(100,500);
monkey.addAnimation("sprite_0.png",monkey_running);
monkey.scale=0.3;


ground=createSprite(100,590,1200,10);
ground.velocityX=-6;
  ground.x=ground.width/2;
  
  FoodGroup=createGroup();
  obstacleGroup=createGroup();
}



function draw() {
background("white");
createEdgeSprites();

survivalTime=Math.ceil(frameCount/frameRate());
  
if (ground.x<0){

ground.x=ground.width/2;
}
    
bananas();
obstacles();
  
monkey.velocityY=10;
if (keyDown("space")){
monkey.velocityY=-12
}

monkey.collide(ground);
drawSprites();
fill("red");
textSize(20);
text("Score:- "+score,500,50);      
  
text("Survival Time:-"+ survivalTime,25,50);
}

function bananas(){
if (frameCount%80===0){
banana=createSprite();
banana.y=Math.round(random(120,200));
banana.x=Math.round(random(120,500));
banana.lifetime=50;
banana.addImage("banana.png",bananaImage);
banana.scale=0.1;
banana.velocityX=-6;
banana.depth=monkey.depth;
monkey.depth=monkey.depth+1;
  
FoodGroup.add(banana);
}
}


function obstacles(){
if (frameCount%300===0){
obstacle=createSprite(300,500);
obstacle.addImage("obstacle.png",obstacleImage);
obstacle.scale=0.5
obstacle.lifetime=100;
obstacleGroup.add(obstacle);
}


}




var ground,backgroundImage
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var bananaScore = 0;
var PLAY = 0;
var END = 1;
var gameState = PLAY;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600,400)

  FoodGroup=new Group()
  obstaclesGroup=new Group() 
//creating Monkey
  monkey=createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1
  
  ground=createSprite(300,350,1200,10)
ground.velocityX=-4
ground.x=ground.width/2;
console.log(ground.x)
 
}


function draw() {
  
background("lightblue")
  
 text("SURVIVAL TIME: "+score, 470, 20);
  text("BANANAS COLLECTED: "+bananaScore,300,20);
  
  if (gameState === PLAY){
   bananas();
   spawnObstacles();
    score = score + Math.round(getFrameRate()/60);
 
  if(ground.x<0){ground.x=200
    
  }
  
  if (keyDown("space")){
    monkey.velocityY=-12
  }
    
  monkey.velocityY+=0.5
  
  monkey.collide(ground)
  
    
  } 
  drawSprites();
}





function bananas(){
  if (frameCount%80 === 0){
    
    banana = createSprite(600,200, 40, 40 )
    banana.addAnimation("banana", bananaImage);
    banana.scale = 0.1;
    banana.velocityX =-5           
    banana.lifetime = 200;
    FoodGroup.add(banana);
      }
   }
function spawnObstacles() {
  if(frameCount % 300 === 0) {
    var obstacle = createSprite(600,320,10,40);
    //obstacle.debug = true;
    obstacle.velocityX =-6
    obstacle.addImage(obstacleImage)
   obstacle.scale= 0.2;
    
    //assign scale and lifetime to the obstacle           
    
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}

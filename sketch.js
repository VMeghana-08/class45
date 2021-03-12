//const Engine=Matter.Engine
//const World=Matter.World
//const Bodies=Matter.Bodies
//const Constraint=Matter.Constraint
//var engine,world;
var bullsEye;
//var box=[]

function preload(){
  bullsEyeImage=loadImage("images/bullseye.png")
  gunImage=loadImage("images/gun.jpg") 
  bulletImage=loadImage("images/bullet.jpg")
}

function setup() {
  createCanvas(800,400);

 // engine=Engine.create();
 // world=engine.world;

  bullsEye=createSprite(400,50,70,70);
  bullsEye.addImage(bullsEyeImage);
  bullsEye.scale=0.1;
  bullsEye.debug=true;
  bullsEye.setCollider("circle",0,0,400)
 // bullsEye.shapeColor="red"

 gun=createSprite(200,350,70,70);
 
 gun.addImage(gunImage);
 gun.scale=0.5;
  
 // bullsEye.body.Velocity.x=5;
 // bullsEye.body.velocity.y=5
//  console.log(bullsEye.body.velocity.x);
  //box2=new Box(920,320,70,70);
 // ground=new Ground(width/2,80,width,10);
  
}
function draw() {

  background("white");

  gun.x=mouseX;
 
  if(keyWentDown("space")){
    shootBullet();
  }
 // Engine.update(engine)
 // ground.display();
//  bullsEye.display();

drawSprites();
 
}
function shootBullet(){
  bullet=createSprite(gun.x+18,gun.y-55)
  bullet.addImage(bulletImage);
  bullet.scale=0.03;
  bullet.velocityY=-5;
  bullet.debug=true;
  bullet.lifetime=100;
}

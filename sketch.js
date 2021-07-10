const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var world,engine;
var target,balloon,slingShot;
var targetImg,ballonImg,splashImg;

function preload(){
  targetImg = loadImage("target.png");
    balloonImg = loadImage("balloon.png");
    splashImg = loadImage("splash.png");
}

function setup() {
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  createCanvas(800,600);
  target = createSprite(400,120,20,20);
  target.scale = 0.2;
  balloon = createSprite(400,450,20,20)
  balloon.scale = 0.1;
  
 
  World.add(world,balloon);
  slingShot = new Slingshot(balloon,{x:400,y:450});
}


function draw() {
  background("black");
  Engine.update(engine);
  text(mouseX + ',' + mouseY, 10, 15);

   target.addImage(targetImg);
   balloon.addImage(balloonImg);

  drawSprites();

  slingShot.display();
  stand.display();
}
function mouseDragged(){
  Matter.Body.setPosition(this.balloon,{x:mouseX,y:mouseY});
}


function mouseReleased(){
  slingShot.fly()
}
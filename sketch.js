const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var bullet1;
var launchX = 330;
var launchY = 330;
var flag = "start";
var angle = 0;
var ironMan;

function preload(){
	bg = loadImage("bg.jpg");
}

function setup() {
	createCanvas(1200,600);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,580);
	enemy1 = new Ultron(800,100);
	enemy2 = new WinterSoldier(600,300);
  enemy3 = new Thanos(1050,300);
  ironMan = new IronMan(200, 370, 400,400);
  bullet1 = new Bullet(330,330);

  bullet2 = new BulletObj(bullet1.body,{x:330,y:330});

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(bg);
  
  ground.display();
  enemy1.display();
  enemy2.display();
  enemy3.display();
  bullet1.display();
  ironMan.display();
  bullet2.display();
  
  if(keyIsDown(32)){
    bullet2.attach(bullet1.body);
  }

  //imageMode(CENTER);
  //image(bg,200,370,400,400);

}	

function keyReleased(){
  if(keyCode===32){
    flag = "launch";
    bullet2.fly();
  }
}

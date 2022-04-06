const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var fundo;
var tower;
var towerImage;
var canhao
var canhao20





function preload() {
 fundo = loadImage("./assets/background.gif");
 towerImage = loadImage("./assets/tower.png");
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
 options={
 isStatic:true
 }
 
 ground= Bodies.rectangle(0,height-1, width*2,1,options);
 World.add(world,ground);

 tower = Bodies.rectangle(160, 350, 160, 310, options);
 World.add(world, tower);
 
canhao20 = 20
canhao = new Cannon(180, 110, 130, 100, canhao20);

}

function draw() {
  background(189);
  image(fundo, 0, 0, 1200, 600);

  Engine.update(engine);
 
 rect(ground.position.x, ground.position.y,width*2,1);

 push();
 imageMode(CENTER);
 image(towerImage, tower.position.x, tower.position.y, 160, 310);
 pop();
   
 canhao.mostrar();
}

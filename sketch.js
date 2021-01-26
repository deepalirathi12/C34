const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function setup() {
  createCanvas(1300, 600);
  engine = Engine.create();
  world = engine.world;

  

}

function draw() {
  background("black");
  Engine.update(engine);
  



}


function mouseDragged() {
  
}



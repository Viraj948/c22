const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine;
var world;
var object;

function setup() {
 var canvas= createCanvas(800,400);
  engine= Engine.create();
  world=engine.world;
  object=Bodies.circle(200,200,20);
  World.add(world.object);
  console.log(object);
}

function draw() {
  background(0); 
  rectMode(CENTER);
  rect (400,200,50,50);

}
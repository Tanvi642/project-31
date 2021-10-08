const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particles = [];
var divisions = [];
var plinkos = [];
var ground;
var diviHeight = 300;


function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;


  ground = new Ground(width/2,height,width,20);
  for(var i = 0; i<width; i+=80){
    divisions.push (new Division (i,height-diviHeight/2,10,diviHeight))
  }
  for(var i = 50; i<width; i+=50){
    plinkos.push(new Plinko(i,75))
  }
  for(var i = 75; i<width-50; i+=50){
    plinkos.push(new Plinko(i,175))
  }
  for(var i = 50; i<width; i+=50){
    plinkos.push(new Plinko(i,275))
  }
  for(var i = 75; i<width-50; i+=50){
    plinkos.push(new Plinko(i,375))
  }
}

function draw() {
  background(0);  
  Engine.update(engine);
 for (var i = 0; i<divisions.length;i++){
   divisions[i].display();
}
for (var i = 0; i<plinkos.length;i++){
  plinkos[i].display();
}
if(frameCount%60 === 0 ){
  particles.push(new Particle(random(width/2 - 50, width/2 + 50),10))
}
for (var i = 0; i<particles.length;i++){
  particles[i].display();
}

}
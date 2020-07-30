const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
var world, engine;
var ground;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 280;
var canvasWidth = 480;
var canvasHeight = 700;

function setup() {
  createCanvas(canvasWidth,canvasHeight);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(240, 690);
  
  for(var i = 0; i <= canvasWidth; i+= 80){
    divisions.push(new Divisions(i, canvasHeight-divisionHeight/2, 5, divisionHeight));
  }
  for(var j = 40; j <= canvasWidth; j+=50){
    plinkos.push(new Plinko(j, 75));
  }
  for(var j = 15; j <= canvasWidth; j+=50){
    plinkos.push(new Plinko(j, 175));
  }
  for(var j = 40; j <= canvasWidth; j+=50){
    plinkos.push(new Plinko(j, 275));
  }
  for(var j = 15; j <= canvasWidth; j+=50){
    plinkos.push(new Plinko(j, 375));
  }
  
}



function draw() {
  background(30);  
  Engine.update(engine);
  for(var i = 0; i < divisions.length; i++){
    divisions[i].display();
  }
  ground.display();
  for(var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(canvasWidth/2 - 25, canvasWidth/2 + 25), 10, 10));
  }
  for(var k = 0; k < particles.length; k++){
    particles[k].display();
  }
}


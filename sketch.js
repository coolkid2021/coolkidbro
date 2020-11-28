const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine ,world;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;


function setup() {
  var canvas =createCanvas(480,800);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(600,height,1200,20);
  for (var j = 40;j<=width;j = j+60){
    plinkos.push(new Plinko(j,75,20));
  }

  for (var j = 15;j<=width;j = j+60){
    plinkos.push(new Plinko(j,175,20));
  }
  for (var j = -10;j<=width;j = j+60){
    plinkos.push(new Plinko(j,275,20));
  }
  for (var j = -35;j<=width;j = j+60){
    plinkos.push(new Plinko(j,375,20));
  }
   for( var k =0;k<=width;k = k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
   }
   for (var j = 0;j<particles.length;j ++){
   particles[j].display();
   }
   
   


}

function draw() {
  background("black");  
  Engine.update(engine);
  ground1.display();
  for (var i = 0;i<plinkos.length;i = i+1){
    plinkos[i].display();
}
  for (var k = 0;k<divisions.length;k ++){
   divisions[k].display();
  }  
  if(frameCount%30===0){
    particles.push(new Particle(random(width/10-8,width/1+10),10,10));
   }
  for (var l = 0;l<particles.length;l ++){
    particles[l].display();
   }  


}
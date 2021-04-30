const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var particle=[];
var plinkos  =[];
var divisions =[];
var divisionheight=200;

function setup() 
{
  createCanvas(700,700);
  engine = Engine.create();
  world  = engine.world;
  base   = new ground(width/2,height,width,20);

  for(var k =0; k<=width;k=k+80)
  {
     divisions.push(new division(k,height-divisionheight/2,10,divisionheight))
  }
  for(var j=75;j<=width;j=j+50)
{
    plinkos.push(new plinko(j,75));
}
  for(var j=45; j<width-10;j=j+50)
  {
    plinkos.push(new plinko(j,175));
  } 
  for(var j=75; j<width-10;j=j+50)
  {
    plinkos.push(new plinko(j,275));
  } 
  for(var j=45; j<width-10;j=j+50)
  {
    plinkos.push(new plinko(j,375));
  } }

function draw() {
  background(232,255,255);  
  
  Engine.update(engine);
  base.display();

  for(var i=0; i < plinkos.length; i++)
  {
    plinkos[i].display();
  }
  
  if(frameCount%20===0)
  {
    particle.push(new particles(random(100,700),10,10))
  }
  for(var j=0; j<particle.length; j++)
  {
    particle[j].display();
  }
  for(var k =0;k<divisions.length; k++)
  {
    divisions[k].display();
  }
  drawSprites();
}
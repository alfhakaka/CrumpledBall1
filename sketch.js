
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var paper;
var dustbinLeft,dustbinRight,dustbinBottom;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground=new Ground(400,650,800,10)
	paper=new Paper(100,600,20)
	dustbinBottom=new DustBin(650,625,150,15)
	dustbinLeft=new DustBin(590,600,15,100)
	dustbinRight=new DustBin(750,600,15,100)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper.display();
  dustbinBottom.display();
  dustbinLeft.display();
  dustbinRight.display();
  drawSprites();
 text(mouseX+","+mouseY,mouseX,mouseY)
}
function keyPressed() {
if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(paper.body,paper.body.position,{x:65,y:-65})
}

}



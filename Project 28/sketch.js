
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var mangos1,mangos2,mangos3
var tree
var stone
var boyIMG,boy
var Grounds
function preload()
{
	boyIMG = loadImage("sprites/stone.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
mangos1=new Mangos(100,100,10);
mangos2=new Mangos(130,100,10);
mangos3=new Mangos(160,100,10);
tree=new Tree(100,10,300,500);
boy=createSprite(50,10);
boy.addImage(boyIMG);
boy.scale=0.5;
Grounds=new Ground(400,10,800,30);
stone=new Stone()
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  detectollision(stone,mangos1);
  detectollision(stone,mangos2);
  detectollision(stone,mangos3);

  
  drawSprites();
  mangos1.display();
  mangos2.display();
  mangos3.display();
  tree.display();
  boy.display();
  Grounds.display();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    boy.fly();
}

function detectCollision(lmangos,lstone){
	mangoBodyPosition=lmango.body.mangoBodyPosition
	stoneBodyPosition=lstone.body.mangoBodyPosition

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r)
	{
		Matter.Body.setStatic(lmango.body,false);
	}

}



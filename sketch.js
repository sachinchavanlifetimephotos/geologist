const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
  

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 hammer=createSprite(600,500,150,20); 
 hammer.shapeColor="orange"; 



box1= new box(200,200) 

  Engine.run(engine); 
  
  ground=createSprite(350,680,900,10); 
  
}

function draw() {
  rectMode(CENTER); 
  Engine.update(engine); 
  background("lightblue"); 
  
  hammer.display(); 
  hammer.x=mouseX; 
  hammer.y=mouseY; 

  box1.display(); 
 
  ground.display(); 
  drawSprites();
 
} 

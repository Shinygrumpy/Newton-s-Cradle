const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roofObject = new Ground(400,10,700,50);
	bobObject1 = new Bob(200,200,50);
	bobObject2 = new Bob(300,200,50);
	bobObject3 = new Bob(400,200,50);
  bobObject4 = new Bob(500,200,50);
	bobObject5 = new Bob(600,200,50);
	rope1 = new Rope(bobObject1.body,roofObject.body, -220, 0);
  rope2 = new Rope(bobObject2.body,roofObject.body,-140, 0);
  rope3 = new Rope(bobObject3.body,roofObject.body, -20, 0);
  rope4 = new Rope(bobObject4.body,roofObject.body, 50, 0);
  rope5 = new Rope(bobObject5.body,roofObject.body, 140, 0);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  roofObject.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();  
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display(); 

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

       Matter.Body.applyForce(bobObject1.body, bobObject1.body.position,{x:-250, y:-250})

	}
}




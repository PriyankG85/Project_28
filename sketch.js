
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject, ground;
var dustbin1, dustbin2, dustbin3;
var world;

function preload() {

}

function setup() {
	createCanvas(800, 550);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperObject = new Paper(100, 392, 80);
	ground = new Ground(width / 2, 420, width);
	dustbin1 = new Dustbin(600, 405, 200, 15);
	dustbin2 = new Dustbin(500, 372, 15, 80);
	dustbin3 = new Dustbin(700, 372, 15, 80);

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background('aqua');

	paperObject.display();
	ground.display();
	dustbin1.display();
	dustbin2.display();
	dustbin3.display();

	drawSprites();
}

function keyPressed() {

	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:50,y:-70});

    
  	}
}




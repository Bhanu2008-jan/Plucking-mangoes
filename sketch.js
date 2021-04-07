
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;
var rock;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
    mango2=new mango(1100,500,30);
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	rock = rect(200,200,50,40);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  rect(200,400,50,40);
  textSize(32);
  text("Help the boy get the mango. Press up key to continue", 100,100);
  stroke('blue');
  strokeWeight(3);
  image(boy ,200,340,200,300);

  if(keyCode === UP_ARROW){
	mango2.display();
	textSize(32)
	text("you did it", 550,150);
	rock.x = 500;
	rock.y = 500;
	strokeWeight(5);
	
	
}
  
  
  treeObj.display();
  mango1.display();
  mango2.display
  

  groundObject.display();
}

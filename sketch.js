const Engine=Matter.Engine; 
const World=Matter.World; 
const Bodies=Matter.Bodies; 
var myEngine,myWorld; 
var ground1;
var ball;
var box1,box2;


function setup(){ 
  createCanvas(2000,800);
 myEngine=Engine.create();
  myWorld=myEngine.world;
  ground1 = new ground(600,600,1500,20);
  box1 = new Box(600,590,70,70);
  box2 = new Box(700,590,50,50);

 } 

function draw(){
   background("black");
    Engine.update(myEngine);
   ground1.display();
   box1.display();
  box2.display();

     
    }
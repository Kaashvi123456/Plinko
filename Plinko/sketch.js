const Matter=Matter;
const Engine= Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies;
const Body = Matter.Body

var divisions = [];
var divisionsHeight = 300;
var particles = [];
var plinkos = [];
function preload(){


}



function setup(){
createCanvas(800, 700);
engine=Engine.create()
world= engine.world

//Create the bodies Here.
ground=new Ground(600,600,1200,20)

/*ball1= new Ball(900,100,70,70)
ball2= new Ball(900,100,70,70)
ball3= new Ball(900,100,70,70)
ball4= new Ball(900,100,70,70)
ball5= new Ball(900,100,70,70)
ball6= new Ball(900,100,70,70)*/
console.log("fine")
}

function draw(){
background("orange")
Engine.update(engine)
ground.display();
ball1.display();
ball2.display();
ball3.display();
ball4.display();
ball5.display();
ball6.display();

ball.display();
rope.display();
console.log("fine")

}

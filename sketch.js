const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var maxDrops;
var engine, world;
var thunder;
var rain=[]

function preload(){
    thunder1Img = loadImage("thunderbolt/1.png");
    thunder2Img = loadImage("thunderbolt/2.png");
    thunder3Img = loadImage("thunderbolt/3.png");
    thunder4Img = loadImage("thunderbolt/4.png");
   
 /*   walking2Img = loadImage("WalkingFrame/walking_2.png");
    walking3Img = loadImage("WalkingFrame/walking_3.png");
    walking4Img = loadImage("WalkingFrame/walking_4.png");
    walking5Img = loadImage("WalkingFrame/walking_5.png");*/
}
function setup(){
    var canvas = createCanvas(400,500);
    engine = Engine.create();
    world = engine.world;
 
   umbrellaMan=new Umbrella (200,370)

   maxDrops=100
    
    for (var i=0;i<maxDrops;i++){
        rain.push(new Drop(random(0,400),random(0,400)));
    }

}

function draw(){
background("black")
    
    Engine.update(engine);

    for (var i=0;i<rain.length;i+=1){
        rain[i].display();
        rain[i].update();
    }

    umbrellaMan.display();
}   


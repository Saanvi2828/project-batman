const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var thunder

function preload(){
    thunder1Img = loadImage("1.png");
    thunder2Img = loadImage("2.png");
    thunder3Img = loadImage("3.png");
    thunder4Img = loadImage("4.png");
    walking1Img = loadImage("walking_1.png");
    walking2Img = loadImage("walking_2.png");
    walking3Img = loadImage("walking_3.png");
    walking4Img = loadImage("walking_4.png");
    walking5Img = loadImage("walking_5.png");
}
function setup(){
    var canvas = createCanvas(400,500);
    engine = Engine.create();
    world = engine.world;
   thunder= createSprite(230,250,50) 
   thunder.addImage(thunder1Img,"thunderbolt")

   umbrellaMan=new umbrella (230,250,50)
   umbrella.addImage(walking1Img,"walk")
}

function draw(){

    var maxDrops=100
    for (var i=0;i<maxDrops;i++){
        maxDrops.push(new drop(random(0,400),random(0,400)));
    }

    umbrella.display();
}   


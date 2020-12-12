var thunder

function preload(){
    thunder1Img = loadImage("thunderbolt/1.png");
    thunder2Img = loadImage("thunderbolt/2.png");
    thunder3Img = loadImage("thunderbolt/3.png");
    thunder4Img = loadImage("thunderbolt/4.png");
    walking1Img = loadImage("Walking Frame/walking_1.png");
    walking2Img = loadImage("Walking Frame/walking_2.png");
    walking3Img = loadImage("Walking Frame/walking_3.png");
    walking4Img = loadImage("Walking Frame/walking_4.png");
    walking5Img = loadImage("Walking Frame/walking_5.png");
}
function setup(){
   thunder= createSprite(230,250,50) 
   thunder.addImage(thunder1Img,"thunderbolt")

   umbrellaMan=new umbrella (230,250,50)
   umbrella.addImage(walking1Img,"walk")
}

function draw(){
    var canvas = createCanvas(400,500);
    background("black")

    var maxDrops=100
    for (var i=0;i<maxDrops;i++){
        maxDrops.push(new drop(random(0,400),random(0,400)));
    }

    umbrella.display();
}   


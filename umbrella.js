class Umbrella {
    constructor(x,y){
        var options={    
            isStatic:true
        }
        this.body=Bodies.circle(x,y,100,options)
        this.radius=300
        this.walking1Img = loadImage("WalkingFrame/walking_1.png");
        World.add(world,this.body)
    }
    display(){
        var pos =this.body.position;
        imageMode(CENTER);
        image(this.walking1Img,pos.x,pos.y, this.radius,this.radius);

    }
}

class Umbrella {
    constructor(x,y,radius){
        this.body=this.Bodies.circle(x,y,100)
        this.radius=100

        World.add(world,this.body)
    }
    display(){
        var pos =this.body.position;
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y, this.radius,this.radius);
    }
}

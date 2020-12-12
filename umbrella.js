class Umbrella {
    constructor(x,y){
        this.body=this.Bodies.circle(x,y)
        this.radius=this.radius

        World.add(world,this.body)
    }
    display(){
        var pos =this.body.position;
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y, this.radius,this.radius);
    }
}

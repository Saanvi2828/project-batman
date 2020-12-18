class Drop {
    constructor(x,y,radius){
        var options={
            'density':0.5,
            'friction':0.5
        }
        this.body=Bodies.circle(x,y,5,options)
        this.radius=5
 
        World.add(world,this.body)
    }
    display(){
        var pos =this.body.position;
        fill("blue");
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y, this.radius,this.radius);
    }
    update(){
        if (this.body.position.y>height){
            Matter.Body.setPosition(this.rain, {x:random(0,40),y:random(0,400)})
        }
    }
}

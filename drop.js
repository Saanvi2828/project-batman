class Drop {
    constructor(x,y){
        var options={
            'density':0.5,
            'friction':0.5
        }
        this.body=Bodies.circle(x,y,2,options)
        this.radius=2
 
        World.add(world,this.body)
    }
    display(){
        var pos =this.body.position;
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y, this.radius,this.radius);
    }
    update(){
        if (this.body.position.y>500){
            Matter.Body.setPosition(this.body, {x:random(0,400),y:random(0,400)})
        }
    }
}

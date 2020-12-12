class Drop {
    constructor(x,y){
        var options={
            'density':0.5,
            'friction':0.5
        }
        this.body=this.Bodies.circle(x,y)
        this.radius=this.radius
 
        World.add(world,this.body)
    }
    display(){
        var pos =this.body.position;
        fill("blue");
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y, this.radius,this.radius);
    }
}
function update(){
    if (this.body.position.y>height){
        Matter.Body.setPosition(this.rain, {x:random(0,40),y:random(0,400)})
    }
}
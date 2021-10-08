class Particle{
    constructor(x,y){
     var options = {restitution : 0.4 ,};
     this.body=Bodies.circle(x,y,10,options);
     this.color=color(random(0,255),random(0,255),random(0,255));
     World.add (world,this.body);
    }
    display(){
        var position= this.body.position;
        var angle= this.body.angle;
        push();
        translate(position.x,position.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);     
        ellipse(0,0,10,10);
        pop();
    }
    
}
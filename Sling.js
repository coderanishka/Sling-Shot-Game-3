class Sling{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB:pointB,
            stiffness: 0.04,
            length: 10
        }

        

        this.pointB = pointB;    
        this.body = Constraint.create(options);
        World.add(world, this.body);
    }
    attach(body){
        this.body.bodyA = body;
    }

     fly(){

        this.body.bodyA=null;
     } 
    display(){
      //  image(this.sling1,90,255,60,120);
      //  image(this.sling2,20,255,80,120);
      ellipseMode(RADIUS)
      ellipse(110,190,10);
        if(this.body.bodyA!==null){
            var pointA = this.body.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke(48,22,8);
            if(pointA.x<220){
                strokeWeight(6);
                line(pointB.x-30, pointB.y, pointA.x-10, pointA.y);
                line(pointB.x-10, pointB.y, pointA.x+20, pointA.y-3);
                ellipse(this.sling3,pointB.x-30,pointB.y-10,15,30);
            }else{
                strokeWeight(4);
                line(pointB.x+20, pointB.y, pointA.x-10, pointA.y);
                line(pointB.x+20, pointB.y, pointA.x+30, pointA.y-3);
                ellipse(this.ellipse,pointA.x+30,pointA.y-10,15,30);
            }
            pop();
        }
    }
    
}
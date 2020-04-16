class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':1.0,  
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.visibility = 255;
    
    World.add(world, this.body);
  }
  display(){
    console.log(this.body.speed);
    if (this.body.speed < 6.75){
    
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke(255);
   // fill(0,200,200);
        rect(0, 0, this.width, this.height);
    pop();
  } else {
    World.remove(world,this.body);
    push();
    this.vivibility = this.visibility - 1;
    tint(255,this.Visiblity);
    rect(0, 0, this.width, this.height);
    pop();
  }
 }
};

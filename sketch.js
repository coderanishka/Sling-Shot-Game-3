const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var backgroundImg,platform;
var slingShot,pbox;

/*function preload(){
    monkey = loadImage("monkey.png");
}*/

function setup(){
 var canvas = createCanvas(1200,400);
 engine = Engine.create();
 world = engine.world;

 ground = new Ground(600,390,1205,30);
 ground2 = new Ground(400,300,300,30);
 ground3 = new Ground(900,200,300,30);

 pbox = new Pbox(70,20,50,50);

 box1 = new Box(450,200,35,35);
 box2 = new Box(415,200,35,35);
 box3 = new Box(380,200,35,35);
 box4 = new Box(345,200,35,35);
 box5 = new Box(310,200,35,35);
 box6 = new Box(485,200,35,35);

 box13= new Box(340,150,35,35);
 box14= new Box(380,150,35,35);
 box15= new Box(420,150,35,35);
 box16= new Box(460,150,35,35);

 box17= new Box(370,100,40,40);
 box18= new Box(415,100,40,40);

 box7 = new Box(950,100,35,35);
 box8 = new Box(915,100,35,35);
 box9 = new Box(880,100,35,35);
 box10= new Box(845,100,35,35);
 box11= new Box(810,100,35,35);
 box12= new Box(985,100,35,35);

 box19= new Box(840,50,35,35);
 box20= new Box(880,50,35,35);
 box21= new Box(920,50,35,35);
 box22= new Box(960,50,35,35);

 box23= new Box(875,15,40,40);
 box24= new Box(925,15,40,40);

 block1= new Ground(110,330,5,252);
 
 sling = new Sling(pbox.body,{x:130,y:190});
}

function draw(){
    background(155,255,255);
    Engine.update(engine);
          
    strokeWeight(4);
    stroke(50)
    fill(0);
    block1.display();

    sling.display(); 
     
    fill(50,250,180);
    pbox.display();

   
    ellipseMode(RADIUS)
    ellipse(pbox.x,pbox.y,20);
    
    ground.display();
    ground2.display();
    ground3.display();
   

    
    
    fill("purple");
    box1.display();
    box4.display();
    box7.display();
    box10.display();
    box14.display();
    box17.display();
    box20.display();
    box22.display(); 
    box24.display();   
    
    fill("orange");
    box6.display();
    box3.display();
    box12.display();
    box9.display();
    box15.display();
    box18.display();
    box21.display();
    box23.display();
    
    fill("pink");
    box5.display();
    box2.display();
    box11.display();
    box8.display();
    box13.display();
    box16.display();
    box19.display();
    
    textSize(30);
    fill(220,100,255);
    text("Pick It - Drag It - Shoot It !!",200,50);

  
}



function mouseDragged(){
    Matter.Body.setPosition(pbox.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){
    sling.fly();
}

function keyPressed(){
    if(keyCode === 32){
        sling.attach(pbox.body);
    }
}
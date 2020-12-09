/*var string = "my name is manav";
console.log(string);

var num = 10;
console.log(num);

var bool = true;
console.log(bool);

var object = null;
console.log(object);*/

/*var num = 10;
var arr = [1,"time", num];

console.log(arr);

var arr1 = [[1,2],["time",num],[3,4]];
//
console.log(arr1.length);
arr1.push(num)
console.log(rr1);

arr1.pop(num);
console.log(arr1);*/






const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint  = Matter.Constraint;
var constrainedlog;
var engine, world;
var box1, pig1;
var bg;
var gameState = "onSling";
var score = 0 ;
function preload(){
   // bg=loadImage("sprites/bg.png");
   getTime();
}
    

function setup(){
    var canvas = createCanvas(1200,400);
    
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)
    platform = new Ground(100,320,200,160)
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810,350);
    log1 = new Log(810,260,300, PI/2);
    
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(180,60);
   // constrainedlog = new Log(100,320,50,PI/2);
     
    slingshot = new slingshot(bird.body,{x:180,y:60})
 


}

function draw(){
    if(bg)
        background(bg);
        
    Engine.update(engine);
    /*console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);*/
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig1.score();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    pig3.score();
   log3.display();
    
    box5.display();
    log4.display();
    log5.display();
    platform.display();
    bird.display();
    slingshot.display();
    text("Score:" + score,1000,10)
    
    
    
}
function mouseDragged(){
    if (gameState === "onSling"){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
 
}
}
function mouseReleased(){
    slingshot.fly()
    gameState="launched"
}
function keyPressed(){
    if(keyCode===32){
    slingshot.attach(bird.body)
        
    }
}
//asynchronous function - waits before executing other lines
async function getTime(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo");
    var responseJSON = await response.json();
    //console.log(responseJSON);
    var dt = responseJSON.datetime;
    var hour = dt.slice(11,13);
    console.log(hour);

    if(hour>9 || hour<16){
        bg2="sprites/bg2.jpg";
    }else{
        bg2="sprites/bg.png"
    }
    bg=loadImage(bg2);
    
}

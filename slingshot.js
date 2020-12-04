class slingshot{
    constructor(bodyA,pointB){
    var option ={
        bodyA : bodyA,
        pointB : pointB,
        stiffness: 0.04,
        length: 30 
    }
    this.pointB=pointB
    this.sling1=loadImage("sprites/sling1.png");
    this.sling2=loadImage("sprites/sling2.png");
    this.sling3=loadImage("sprites/sling3.png");
    this.sling = Constraint.create(option);
    World.add(world,this.sling)
    }

   attach(body){
    this.sling.bodyA=body
    }
    fly(){
    this.sling.bodyA=null;
    }

    display(){
        image(this.sling1,180,40)
        image(this.sling2,150,40)
        
        if(this.sling.bodyA)
        {
        var posA = this.sling.bodyA.position
        var posB = this.pointB
        push();
        
        stroke(48,22,8);
        if(posA.x<180){
            strokeWeight(5);
            line(posA.x-20,posA.y,posB.x+25,posB.y+5);
            line(posA.x-20,posA.y,posB.x-10,posB.y+5)
            image(this.sling3,posA.x-20,posA.y-5,20,30)
        }
        else{
            strokeWeight(7);
            line(posA.x+20,posA.y,posB.x -15,posB.y+5);
            line(posA.x+20,posA.y,posB.x+10,posB.y+5)
            image(this.sling3,posA.x+20,posA.y-15,20,30)
        }
        pop();
        }
    }
}
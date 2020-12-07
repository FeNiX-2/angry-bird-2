class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke_image= loadImage("sprites/smoke.png");
    this.path = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();

    if(this.body.velocity.x>10 && this.body.position.x>180){
    var position = [this.body.position.x,this.body.position.y]
    this.path.push(position)
     }
     for( var i=0;i< this.path.length; i++){
      image(this.smoke_image,this.path[i][0],this.path[i][1])
    }
  }
}


// path =[ 0[xpos1,ypos1], 1[xpos2,ypos2],2[xpos3,ypos3]]
//path[0][0]
//path[1][0]

//path[0{}][1]
//path[2][1]
//
class IronMan{
    constructor(x,y, width,height){
        this.body = Bodies.rectangle(x,y,width,height,{isStatic:true});
        this.width = width;
        this.height = height;
        this.image = loadImage("Iron Man.png");
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;

        launchX = (this.height+20)*cos(angle);
        launchY = 200+(this.height-20)*sin(angle);
   

        if(keyIsDown(32)){
            Matter.Body.setPosition(bullet1.body,{x:330,y:330});
        }
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}
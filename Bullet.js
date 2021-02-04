class Bullet{
    constructor(x,y){
        this.body = Bodies.rectangle(x,y,50,20);
        this.width = 50;
        this.height = 20;
        this.image = loadImage("fire.png");
        World.add(world,this.body);
    }
    display(){
        if(flag==="launch"){
            var pos = this.body.position;
            imageMode(CENTER);
            image(this.image,pos.x,pos.y,this.width,this.height);
        }
    }
}
class WinterSoldier{
    constructor(x,y){
        this.body = Bodies.rectangle(x,y,100,100,{isStatic:false,restitution:2.5,friction:0.0005,density:0.05});
        this.width = 100;
        this.height = 100;
        this.image = loadImage("wintersolider.png");
        World.add(world,this.body);
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
    }
}
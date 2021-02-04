class Ultron{
    constructor(x,y){
        this.body = Bodies.rectangle(x,y,150,150,{isStatic:false,restitution:2.5,friction:0.0005,density:0.05});
        this.width = 150;
        this.height = 150;
        this.image = loadImage("ultron.png");
        World.add(world,this.body);
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
    }
}
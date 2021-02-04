class Thanos{
    constructor(x,y){
        this.body = Bodies.rectangle(x,y,200,200,{isStatic:false,restitution:2.5,friction:0.0005,density:0.05});
        this.width = 200;
        this.height = 200;
        this.image = loadImage("thanos.png");
        World.add(world,this.body);
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
    }
}
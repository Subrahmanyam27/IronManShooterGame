class Ground{
    constructor(x,y){
        this.body = Bodies.rectangle(x,y,1200,20,{isStatic:true});
        this.width = 1200;
        this.height = 20;
        World.add(world,this.body);
    }
    display(){
        fill("brown");
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}
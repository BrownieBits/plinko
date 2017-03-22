function Boundry(x,y,w,h){
    var options = {
        isStatic:true,
        restitution: 1,
        friction:0
    }
    this.body = Bodies.rectangle(x,y,w,h,options)
    this.w = w;
    this.h = h;
    World.add(world, this.body)
}

Boundry.prototype.show = function(){
    fill( 255,0,0 );
    stroke(255,0,0);
    rectMode(CENTER)
    var pos = this.body.position;
    push()
    translate(pos.x, pos.y)
    rect(0,0,this.w,this.h)
    pop()
}

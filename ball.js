function Ball(x,y,r){
    var options = {
        restitution: 1,
        friction:0
    }
    this.body = Bodies.circle(x,y,r, options)
    this.r = r;
    World.add(world, this.body)
    this.red = Math.floor((Math.random() * 255) + 1)
    this.green = Math.floor((Math.random() * 255) + 1)
    this.blue = Math.floor((Math.random() * 255) + 1)
}

Ball.prototype.show = function(){
    fill( this.red, this.green, this.blue );
    stroke(this.red, this.green, this.blue);
    var pos = this.body.position;
    push()
    translate(pos.x, pos.y)
    ellipse(0,0,this.r * 2)
    pop()
}

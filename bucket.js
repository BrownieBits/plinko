function Bucket(x,y,w,h){
    this.wall1 = new Wall(x + w / 2, y, 2, h);
    this.wall2 = new Wall(x - w / 2, y, 2, h);
    this.floor = new Floor(x, y + h / 2, w , 2);
}

Bucket.prototype.show = function(){
    this.wall1.show();
    this.wall2.show();
    this.floor.show();
}

function Wall(x,y,w,h){
    var options = {
        isStatic:true,
        restitution: .5,
        friction:.5,
        density:1
    }
    this.body = Bodies.rectangle(x,y,w,h,options)
    this.w = w;
    this.h = h;
    World.add(world, this.body)
}

Wall.prototype.show = function(){
    fill( 255,0,0 );
    stroke(255,0,0);
    rectMode(CENTER)
    var pos = this.body.position;
    push()
    translate(pos.x, pos.y)
    rect(0,0,this.w,this.h)
    pop()
}

function Floor(x,y,w,h){
    var options = {
        isStatic:true,
        restitution: 0,
        friction:1,
        density:2
    }
    this.body = Bodies.rectangle(x,y,w,h,options)
    this.w = w;
    this.h = h;
    World.add(world, this.body)
}

Floor.prototype.show = function(){
    fill( 255,0,0 );
    stroke(255,0,0);
    rectMode(CENTER)
    var pos = this.body.position;
    push()
    translate(pos.x, pos.y)
    rect(0,0,this.w,this.h)
    pop()
}
